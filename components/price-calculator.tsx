"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Calculator, DollarSign, Clock, Palette, Target } from "lucide-react"

interface TattooData {
  size: number
  colors: string
  location: string
  age: number
  skinType: string
}

interface PriceBreakdown {
  basePrice: number
  sizeMultiplier: number
  colorMultiplier: number
  locationMultiplier: number
  ageMultiplier: number
  skinMultiplier: number
  totalPrice: number
  sessions: number
  pricePerSession: number
}

export function PriceCalculator() {
  const [tattooData, setTattooData] = useState<TattooData>({
    size: 5,
    colors: "black",
    location: "arm",
    age: 2,
    skinType: "type3"
  })

  const [priceBreakdown, setPriceBreakdown] = useState<PriceBreakdown | null>(null)

  const calculatePrice = () => {
    // 基础价格（每平方厘米）
    const basePricePerCm2 = 50

    // 尺寸倍数
    const sizeMultiplier = tattooData.size <= 5 ? 1.2 : 
                           tattooData.size <= 10 ? 1.0 : 
                           tattooData.size <= 20 ? 0.9 : 0.8

    // 颜色倍数
    const colorMultipliers = {
      black: 1.0,
      colored: 1.5,
      white: 1.8,
      mixed: 1.3
    }

    // 位置倍数
    const locationMultipliers = {
      arm: 1.0,
      leg: 1.0,
      back: 1.1,
      chest: 1.2,
      face: 1.5,
      hand: 1.4,
      foot: 1.3
    }

    // 年龄倍数
    const ageMultiplier = tattooData.age <= 1 ? 1.3 :
                          tattooData.age <= 3 ? 1.1 :
                          tattooData.age <= 5 ? 1.0 : 0.9

    // 皮肤类型倍数
    const skinMultipliers = {
      type1: 1.2, // 非常白皙
      type2: 1.1, // 白皙
      type3: 1.0, // 中等
      type4: 0.9, // 橄榄色
      type5: 0.8, // 深色
      type6: 0.7  // 非常深色
    }

    const basePrice = basePricePerCm2 * tattooData.size
    const sizeMultiplierValue = sizeMultiplier
    const colorMultiplierValue = colorMultipliers[tattooData.colors as keyof typeof colorMultipliers]
    const locationMultiplierValue = locationMultipliers[tattooData.location as keyof typeof locationMultipliers]
    const ageMultiplierValue = ageMultiplier
    const skinMultiplierValue = skinMultipliers[tattooData.skinType as keyof typeof skinMultipliers]

    const totalPrice = basePrice * sizeMultiplierValue * colorMultiplierValue * 
                      locationMultiplierValue * ageMultiplierValue * skinMultiplierValue

    // 估算治疗次数
    const sessions = tattooData.colors === "black" ? 
                    Math.ceil(tattooData.size / 3) : 
                    Math.ceil(tattooData.size / 2) + 2

    const pricePerSession = Math.round(totalPrice / sessions)

    setPriceBreakdown({
      basePrice: Math.round(basePrice),
      sizeMultiplier: sizeMultiplierValue,
      colorMultiplier: colorMultiplierValue,
      locationMultiplier: locationMultiplierValue,
      ageMultiplier: ageMultiplierValue,
      skinMultiplier: skinMultiplierValue,
      totalPrice: Math.round(totalPrice),
      sessions,
      pricePerSession
    })
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* 标题区域 */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
          <Calculator className="h-4 w-4" />
          Smart Price Calculator
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Start Your Price Estimation
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Fill in the information below to get accurate price estimates and professional advice
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* 输入表单 */}
        <Card className="shadow-xl border-0 glass-effect backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              Tattoo Information
            </CardTitle>
            <CardDescription>
              Please fill in your tattoo details for accurate price estimation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* 尺寸 */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Tattoo Size (cm²)</label>
              <div className="flex items-center gap-4">
                <Slider
                  value={[tattooData.size]}
                  onValueChange={(value) => setTattooData({...tattooData, size: value[0]})}
                  max={50}
                  min={1}
                  step={1}
                  className="flex-1"
                />
                <Input
                  type="number"
                  value={tattooData.size}
                  onChange={(e) => setTattooData({...tattooData, size: parseInt(e.target.value) || 1})}
                  className="w-20"
                  min="1"
                  max="50"
                />
              </div>
              <p className="text-xs text-gray-500">
                Current size: {tattooData.size} cm²
              </p>
            </div>

            {/* 颜色 */}
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Palette className="h-4 w-4" />
                Tattoo Color
              </label>
              <Select value={tattooData.colors} onValueChange={(value) => setTattooData({...tattooData, colors: value})}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="black">Black</SelectItem>
                  <SelectItem value="colored">Colored</SelectItem>
                  <SelectItem value="white">White</SelectItem>
                  <SelectItem value="mixed">Mixed</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* 位置 */}
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Target className="h-4 w-4" />
                Tattoo Location
              </label>
              <Select value={tattooData.location} onValueChange={(value) => setTattooData({...tattooData, location: value})}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="arm">Arm</SelectItem>
                  <SelectItem value="leg">Leg</SelectItem>
                  <SelectItem value="back">Back</SelectItem>
                  <SelectItem value="chest">Chest</SelectItem>
                  <SelectItem value="face">Face</SelectItem>
                  <SelectItem value="hand">Hand</SelectItem>
                  <SelectItem value="foot">Foot</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* 年龄 */}
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Tattoo Age (years)
              </label>
              <div className="flex items-center gap-4">
                <Slider
                  value={[tattooData.age]}
                  onValueChange={(value) => setTattooData({...tattooData, age: value[0]})}
                  max={10}
                  min={0}
                  step={1}
                  className="flex-1"
                />
                <Input
                  type="number"
                  value={tattooData.age}
                  onChange={(e) => setTattooData({...tattooData, age: parseInt(e.target.value) || 0})}
                  className="w-20"
                  min="0"
                  max="10"
                />
              </div>
            </div>

            {/* 皮肤类型 */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Skin Type</label>
              <Select value={tattooData.skinType} onValueChange={(value) => setTattooData({...tattooData, skinType: value})}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="type1">Type 1 - Very Fair</SelectItem>
                  <SelectItem value="type2">Type 2 - Fair</SelectItem>
                  <SelectItem value="type3">Type 3 - Medium</SelectItem>
                  <SelectItem value="type4">Type 4 - Olive</SelectItem>
                  <SelectItem value="type5">Type 5 - Dark</SelectItem>
                  <SelectItem value="type6">Type 6 - Very Dark</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button onClick={calculatePrice} className="w-full">
              Calculate Price
            </Button>
          </CardContent>
        </Card>

        {/* 价格结果 */}
        <Card className="shadow-xl border-0 glass-effect backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5" />
              Price Estimation
            </CardTitle>
            <CardDescription>
              Price breakdown based on your provided information
            </CardDescription>
          </CardHeader>
          <CardContent>
            {priceBreakdown ? (
              <div className="space-y-6">
                {/* 总价格 */}
                <div className="text-center p-8 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl text-white shadow-lg">
                  <div className="text-4xl font-bold mb-2">
                    ¥{priceBreakdown.totalPrice.toLocaleString()}
                  </div>
                  <div className="text-blue-100 text-lg">
                    Total Cost Estimate
                  </div>
                  <div className="mt-4 text-blue-100 text-sm">
                    Calculated using professional algorithm
                  </div>
                </div>

                {/* 价格明细 */}
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900">Price Breakdown</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Base Price ({tattooData.size}cm²)</span>
                      <span>¥{priceBreakdown.basePrice}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Size Multiplier</span>
                      <span>×{priceBreakdown.sizeMultiplier.toFixed(1)}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Color Multiplier</span>
                      <span>×{priceBreakdown.colorMultiplier.toFixed(1)}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Location Multiplier</span>
                      <span>×{priceBreakdown.locationMultiplier.toFixed(1)}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Age Multiplier</span>
                      <span>×{priceBreakdown.ageMultiplier.toFixed(1)}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Skin Type Multiplier</span>
                      <span>×{priceBreakdown.skinMultiplier.toFixed(1)}</span>
                    </div>
                  </div>
                </div>

                {/* 治疗信息 */}
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900">Treatment Information</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-lg font-semibold text-gray-900">
                        {priceBreakdown.sessions}
                      </div>
                      <div className="text-xs text-gray-600">Expected Sessions</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-lg font-semibold text-gray-900">
                        ¥{priceBreakdown.pricePerSession}
                      </div>
                      <div className="text-xs text-gray-600">Per Session Cost</div>
                    </div>
                  </div>
                </div>

                {/* 注意事项 */}
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <h5 className="font-medium text-yellow-800 mb-2">Important Notice</h5>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• This price is only an estimate, actual prices may vary by clinic</li>
                    <li>• We recommend consulting a professional doctor for accurate quotes</li>
                    <li>• Number of treatments may vary based on individual circumstances</li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500">
                <Calculator className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <p>Please fill in the information on the left and click &ldquo;Calculate Price&rdquo; button</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 