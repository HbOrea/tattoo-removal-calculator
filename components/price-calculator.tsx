"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Calculator, DollarSign, Clock, Palette, Target, MapPin } from "lucide-react"

interface TattooData {
  length: number // 长度（英寸）
  width: number // 宽度（英寸）
  colors: string
  saturation: string
  layering: string
  location: string
  age: number
  scarring: string
  skinType: string
  region: string
}

interface PriceBreakdown {
  baseCostPerSession: number
  difficultyFactor: number
  regionalFactor: number
  totalSessions: number
  totalCost: number
  costPerSession: number
  sizeFactor: number
  colorFactor: number
  saturationFactor: number
  layeringFactor: number
  ageFactor: number
  locationFactor: number
  scarringFactor: number
  skinFactor: number
}

export function PriceCalculator() {
  const [tattooData, setTattooData] = useState<TattooData>({
    length: 2,
    width: 2,
    colors: "black",
    saturation: "line",
    layering: "no",
    location: "arm",
    age: 2,
    scarring: "no",
    skinType: "type3",
    region: "us_average"
  })

  const [priceBreakdown, setPriceBreakdown] = useState<PriceBreakdown | null>(null)

  const calculatePrice = () => {
    // 基础单次治疗费用（美元）
    const baseCostPerSession = 150

    // 尺寸难度系数
    const getSizeFactor = (length: number, width: number) => {
      const area = length * width
      if (area <= 2) return 1.0
      if (area <= 4) return 1.3
      if (area <= 6) return 1.7
      if (area <= 10) return 2.5
      return 3.5
    }

    // 颜色难度系数
    const colorFactors = {
      black: 1.0,
      dark_blue: 1.2,
      red: 1.2,
      green: 1.4,
      yellow: 1.6,
      white: 1.9,
      mixed: 1.5
    }

    // 饱和度难度系数
    const saturationFactors = {
      line: 1.0,
      filled: 1.3
    }

    // 层叠难度系数
    const layeringFactors = {
      no: 1.0,
      yes: 1.4
    }

    // 年龄难度系数
    const getAgeFactor = (age: number) => {
      if (age < 1) return 1.3
      if (age < 5) return 1.1
      if (age >= 10) return 0.9
      return 1.0
    }

    // 位置难度系数
    const locationFactors = {
      arm: 1.0,
      leg: 1.0,
      back: 1.0,
      chest: 1.1,
      hand: 1.3,
      foot: 1.3,
      neck: 1.4,
      face: 1.5
    }

    // 疤痕难度系数
    const scarringFactors = {
      no: 1.0,
      yes: 1.3
    }

    // 肤色难度系数
    const skinFactors = {
      type1: 1.0,
      type2: 1.0,
      type3: 1.1,
      type4: 1.2,
      type5: 1.4,
      type6: 1.5
    }

    // 地区系数
    const regionalFactors = {
      us_average: 1.0,
      nyc_la: 1.3,
      london: 1.2,
      us_other: 0.9,
      china_tier1: 0.8,
      china_tier2: 0.6
    }

    // 计算各项难度系数
    const sizeFactor = getSizeFactor(tattooData.length, tattooData.width)
    const colorFactor = colorFactors[tattooData.colors as keyof typeof colorFactors]
    const saturationFactor = saturationFactors[tattooData.saturation as keyof typeof saturationFactors]
    const layeringFactor = layeringFactors[tattooData.layering as keyof typeof layeringFactors]
    const ageFactor = getAgeFactor(tattooData.age)
    const locationFactor = locationFactors[tattooData.location as keyof typeof locationFactors]
    const scarringFactor = scarringFactors[tattooData.scarring as keyof typeof scarringFactors]
    const skinFactor = skinFactors[tattooData.skinType as keyof typeof skinFactors]
    const regionalFactor = regionalFactors[tattooData.region as keyof typeof regionalFactors]

    // 计算总难度系数
    const difficultyFactor = sizeFactor * colorFactor * saturationFactor * 
                           layeringFactor * ageFactor * locationFactor * 
                           scarringFactor * skinFactor

    // 估算治疗次数（基于难度系数）
    const baseSessions = 8
    const totalSessions = Math.round(baseSessions * Math.sqrt(difficultyFactor))

    // 计算总费用
    const totalCost = Math.round(baseCostPerSession * difficultyFactor * regionalFactor * totalSessions)
    const costPerSession = Math.round(totalCost / totalSessions)

    setPriceBreakdown({
      baseCostPerSession,
      difficultyFactor,
      regionalFactor,
      totalSessions,
      totalCost,
      costPerSession,
      sizeFactor,
      colorFactor,
      saturationFactor,
      layeringFactor,
      ageFactor,
      locationFactor,
      scarringFactor,
      skinFactor
    })
  }

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* 标题区域 */}
      <div className="text-center space-y-4">
                 <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full text-sm font-semibold mb-6 shadow-lg">
          <Calculator className="h-4 w-4" />
          Professional Price Calculator
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Tattoo Removal Price Estimation
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Get accurate price estimates based on scientific algorithms and professional data
        </p>
      </div>

             <div className="space-y-8">
                  {/* Input Form */}
          <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-gray-50 relative overflow-visible">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              Tattoo Information
            </CardTitle>
            <CardDescription>
              Please fill in your tattoo details for accurate price estimation
            </CardDescription>
          </CardHeader>
                     <CardContent className="space-y-6 overflow-visible">
                         {/* Size */}
             <div className="space-y-2">
               <label className="text-sm font-medium">Tattoo Dimensions (inches)</label>
               <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-2">
                   <label className="text-xs text-gray-600">Length</label>
                   <Input
                     type="number"
                     value={tattooData.length}
                     onChange={(e) => setTattooData({...tattooData, length: parseFloat(e.target.value) || 1})}
                     className="w-full"
                     min="0.5"
                     max="10"
                     step="0.1"
                     placeholder="Length"
                   />
                 </div>
                 <div className="space-y-2">
                   <label className="text-xs text-gray-600">Width</label>
                   <Input
                     type="number"
                     value={tattooData.width}
                     onChange={(e) => setTattooData({...tattooData, width: parseFloat(e.target.value) || 1})}
                     className="w-full"
                     min="0.5"
                     max="10"
                     step="0.1"
                     placeholder="Width"
                   />
                 </div>
               </div>
               <p className="text-xs text-gray-500">
                 Area: {(tattooData.length * tattooData.width).toFixed(1)} sq inches
               </p>
             </div>

                         {/* Color */}
             <div className="space-y-2 relative pb-4">
               <label className="text-sm font-medium flex items-center gap-2">
                 <Palette className="h-4 w-4" />
                 Ink Color
               </label>
               <Select value={tattooData.colors} onValueChange={(value) => setTattooData({...tattooData, colors: value})}>
                 <SelectTrigger>
                   <SelectValue />
                 </SelectTrigger>
                                   <SelectContent>
                    <SelectItem value="black" className="text-black font-medium">Black</SelectItem>
                    <SelectItem value="dark_blue" className="text-blue-800 font-medium">Dark Blue</SelectItem>
                    <SelectItem value="red" className="text-red-600 font-medium">Red</SelectItem>
                    <SelectItem value="green" className="text-green-600 font-medium">Green</SelectItem>
                    <SelectItem value="yellow" className="text-yellow-600 font-medium">Yellow</SelectItem>
                    <SelectItem value="white" className="text-gray-600 font-medium">White</SelectItem>
                    <SelectItem value="mixed" className="text-purple-600 font-medium">Mixed Colors</SelectItem>
                  </SelectContent>
               </Select>
             </div>

                         {/* Saturation */}
             <div className="space-y-2 relative pb-4">
               <label className="text-sm font-medium">Ink Saturation</label>
               <Select value={tattooData.saturation} onValueChange={(value) => setTattooData({...tattooData, saturation: value})}>
                 <SelectTrigger>
                   <SelectValue />
                 </SelectTrigger>
                 <SelectContent>
                   <SelectItem value="line">Line Work</SelectItem>
                   <SelectItem value="filled">Completely Filled</SelectItem>
                 </SelectContent>
               </Select>
             </div>

                         {/* Layering */}
             <div className="space-y-2 relative pb-4">
               <label className="text-sm font-medium">Ink Layering</label>
               <Select value={tattooData.layering} onValueChange={(value) => setTattooData({...tattooData, layering: value})}>
                 <SelectTrigger>
                   <SelectValue />
                 </SelectTrigger>
                 <SelectContent>
                   <SelectItem value="no">No Layering</SelectItem>
                   <SelectItem value="yes">With Layering</SelectItem>
                 </SelectContent>
               </Select>
             </div>

                         {/* Location */}
             <div className="space-y-2 relative pb-4">
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
                   <SelectItem value="hand">Hand</SelectItem>
                   <SelectItem value="foot">Foot</SelectItem>
                   <SelectItem value="neck">Neck</SelectItem>
                   <SelectItem value="face">Face</SelectItem>
                 </SelectContent>
               </Select>
             </div>

                                      {/* Age */}
             <div className="space-y-2 relative pb-4">
               <label className="text-sm font-medium flex items-center gap-2">
                 <Clock className="h-4 w-4" />
                 Tattoo Age (years)
               </label>
               <Input
                 type="number"
                 value={tattooData.age}
                 onChange={(e) => setTattooData({...tattooData, age: parseInt(e.target.value) || 0})}
                 className="w-full"
                 min="0"
                 max="20"
                 step="1"
                 placeholder="Enter age in years"
               />
             </div>

                         {/* Scarring */}
             <div className="space-y-2 relative pb-4">
               <label className="text-sm font-medium">Scarring</label>
               <Select value={tattooData.scarring} onValueChange={(value) => setTattooData({...tattooData, scarring: value})}>
                 <SelectTrigger>
                   <SelectValue />
                 </SelectTrigger>
                 <SelectContent>
                   <SelectItem value="no">No Scarring</SelectItem>
                   <SelectItem value="yes">With Scarring</SelectItem>
                 </SelectContent>
               </Select>
             </div>

                         {/* Skin Type */}
             <div className="space-y-2 relative pb-4">
               <label className="text-sm font-medium">Skin Type</label>
               <Select value={tattooData.skinType} onValueChange={(value) => setTattooData({...tattooData, skinType: value})}>
                 <SelectTrigger>
                   <SelectValue />
                 </SelectTrigger>
                 <SelectContent>
                   <SelectItem value="type1">Type I - Very Fair</SelectItem>
                   <SelectItem value="type2">Type II - Fair</SelectItem>
                   <SelectItem value="type3">Type III - Medium</SelectItem>
                   <SelectItem value="type4">Type IV - Olive</SelectItem>
                   <SelectItem value="type5">Type V - Dark</SelectItem>
                   <SelectItem value="type6">Type VI - Very Dark</SelectItem>
                 </SelectContent>
               </Select>
             </div>

                         {/* Region */}
             <div className="space-y-2 relative pb-4">
               <label className="text-sm font-medium flex items-center gap-2">
                 <MapPin className="h-4 w-4" />
                 Region
               </label>
               <Select value={tattooData.region} onValueChange={(value) => setTattooData({...tattooData, region: value})}>
                 <SelectTrigger>
                   <SelectValue />
                 </SelectTrigger>
                 <SelectContent>
                   <SelectItem value="us_average">US Average</SelectItem>
                   <SelectItem value="nyc_la">NYC/Los Angeles</SelectItem>
                   <SelectItem value="london">London</SelectItem>
                   <SelectItem value="us_other">Other US Cities</SelectItem>
                   {/* <SelectItem value="china_tier1">China Tier 1 Cities</SelectItem> */}
                   {/* <SelectItem value="china_tier2">China Tier 2-3 Cities</SelectItem> */}
                 </SelectContent>
               </Select>
             </div>

                                                   <Button onClick={calculatePrice} className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 text-lg shadow-lg">
              Calculate Price
            </Button>
          </CardContent>
                 </Card>

                  {/* Price Results */}
          <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-gray-50 relative overflow-visible">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5" />
              Price Estimation Results
            </CardTitle>
            <CardDescription>
              Price breakdown based on your information and scientific algorithms
            </CardDescription>
          </CardHeader>
          <CardContent>
            {priceBreakdown ? (
              <div className="space-y-6">
                                 {/* 总价格 */}
                                  <div className="text-center p-10 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-xl text-white shadow-2xl">
                  <div className="text-4xl font-bold mb-2">
                    ${priceBreakdown.totalCost.toLocaleString()}
                  </div>
                  <div className="text-blue-100 text-lg">
                    Total Cost Estimate
                  </div>
                  <div className="mt-4 text-blue-100 text-sm">
                    Calculated using professional algorithms
                  </div>
                </div>

                                 {/* 治疗信息 */}
                 <div className="grid grid-cols-2 gap-6">
                                      <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                      <div className="text-3xl font-bold text-blue-900 mb-1">
                        {priceBreakdown.totalSessions}
                      </div>
                      <div className="text-sm text-blue-700 font-medium">Expected Sessions</div>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100">
                     <div className="text-3xl font-bold text-green-900 mb-1">
                       ${priceBreakdown.costPerSession}
                     </div>
                     <div className="text-sm text-green-700 font-medium">Cost Per Session</div>
                   </div>
                 </div>

                

                                 {/* Regional Factor */}
                 <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100">
                   <h4 className="font-semibold text-purple-900 mb-3">Regional Adjustment</h4>
                   <div className="flex justify-between items-center text-sm">
                     <span className="text-purple-700">Regional Factor</span>
                     <span className="font-bold text-purple-900 text-lg">×{priceBreakdown.regionalFactor.toFixed(2)}</span>
                   </div>
                 </div>

                                 {/* Important Notice */}
                 <div className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-xl">
                   <h5 className="font-semibold text-amber-900 mb-3 flex items-center gap-2">
                     <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                     Important Notice
                   </h5>
                   <ul className="text-sm text-amber-800 space-y-2">
                     <li className="flex items-start gap-2">
                       <span className="text-amber-600 mt-1">•</span>
                       <span>This price is only an estimate, actual prices may vary by clinic</span>
                     </li>
                     <li className="flex items-start gap-2">
                       <span className="text-amber-600 mt-1">•</span>
                       <span>We recommend consulting a professional doctor for accurate quotes</span>
                     </li>
                     <li className="flex items-start gap-2">
                       <span className="text-amber-600 mt-1">•</span>
                       <span>Number of treatments may vary based on individual circumstances</span>
                     </li>
                     <li className="flex items-start gap-2">
                       <span className="text-amber-600 mt-1">•</span>
                       <span>Prices are calculated in USD, please refer to current exchange rates for other currencies</span>
                     </li>
                   </ul>
                 </div>
              </div>
                         ) : (
               <div className="text-center py-16 text-gray-500">
                 <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
                   <Calculator className="h-10 w-10 text-gray-400" />
                 </div>
                 <p className="text-lg">Please fill in the information above and click &ldquo;Calculate Price&rdquo; button</p>
               </div>
             )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 