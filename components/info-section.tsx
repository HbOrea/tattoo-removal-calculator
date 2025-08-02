"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertTriangle, Clock, DollarSign, Heart, Shield, Users } from "lucide-react"

export function InfoSection() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-12 relative">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white/50 to-purple-50/50"></div>
      <div className="relative z-10">
      {/* 特色功能 */}
      <div className="grid md:grid-cols-3 gap-8">
        <Card className="text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white/90 backdrop-blur-sm border-0">
          <CardHeader>
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
              <DollarSign className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-xl">Transparent Pricing</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 leading-relaxed">
              Detailed price breakdown including base costs, treatment sessions, regional differences, and more to help you understand every cost
            </p>
          </CardContent>
        </Card>

        <Card className="text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white/90 backdrop-blur-sm border-0">
          <CardHeader>
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-xl">Professional Guidance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 leading-relaxed">
              Professional pain management advice and risk information to help you make informed decisions
            </p>
          </CardContent>
        </Card>

        <Card className="text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white/90 backdrop-blur-sm border-0">
          <CardHeader>
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
              <Users className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-xl">Clinic Recommendations</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 leading-relaxed">
              Professional clinic recommendations based on your location with user reviews and price comparisons
            </p>
          </CardContent>
        </Card>
      </div>

      {/* 详细知识库 */}
      <Tabs defaultValue="process" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-white/80 backdrop-blur-sm shadow-lg border-0">
          <TabsTrigger value="process" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white">Treatment Process</TabsTrigger>
          <TabsTrigger value="pain" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-500 data-[state=active]:to-orange-500 data-[state=active]:text-white">Pain & Risks</TabsTrigger>
          <TabsTrigger value="methods" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-teal-500 data-[state=active]:text-white">Treatment Methods</TabsTrigger>
          <TabsTrigger value="care" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white">Care Guide</TabsTrigger>
        </TabsList>

        <TabsContent value="process" className="space-y-4">
          <Card className="shadow-lg bg-white/90 backdrop-blur-sm border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Complete Tattoo Removal Process
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Pre-Treatment Preparation</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Professional doctor consultation and assessment</li>
                    <li>• Skin type and tattoo characteristics analysis</li>
                    <li>• Personalized treatment plan development</li>
                    <li>• Understanding treatment risks and expected outcomes</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Treatment Process</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Laser treatment: 15-30 minutes per session</li>
                    <li>• Treatment intervals: 6-8 weeks</li>
                    <li>• Total course: 3-10 sessions (depending on case)</li>
                    <li>• Professional doctor supervision throughout</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pain" className="space-y-4">
          <Card className="shadow-lg bg-white/90 backdrop-blur-sm border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Pain & Risk Management
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Pain Level</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Laser treatment: Similar to rubber band snapping</li>
                    <li>• Local anesthesia can be used to reduce pain</li>
                    <li>• Sensitive areas may feel more painful</li>
                    <li>• Mild discomfort after treatment, resolves in 1-2 days</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Potential Risks</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Minor scarring (rare)</li>
                    <li>• Hyperpigmentation or hypopigmentation</li>
                    <li>• Infection risk (very low)</li>
                    <li>• Allergic reactions (rare)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="methods" className="space-y-4">
          <Card className="shadow-lg bg-white/90 backdrop-blur-sm border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5" />
                Treatment Methods Explained
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Laser Removal</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Most common and effective method</li>
                    <li>• Suitable for most tattoo types</li>
                    <li>• Best results with black tattoos</li>
                    <li>• Colored tattoos require special lasers</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Other Methods</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Surgical excision: Small tattoos</li>
                    <li>• Chemical peeling: Not recommended</li>
                    <li>• Home methods: High risk, poor results</li>
                    <li>• Temporary tattoos: Can be safely removed</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="care" className="space-y-4">
          <Card className="shadow-lg bg-white/90 backdrop-blur-sm border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Post-Treatment Care Guide
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Immediate Care</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Keep treatment area clean and dry</li>
                    <li>• Avoid direct sunlight</li>
                    <li>• Do not scratch or rub</li>
                    <li>• Use prescribed ointments as directed</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Long-term Care</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Sun protection (SPF 30+)</li>
                    <li>• Avoid swimming and saunas</li>
                    <li>• Regular follow-up visits</li>
                    <li>• Maintain healthy lifestyle</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* 常见问题 */}
      <Card className="shadow-lg bg-white/90 backdrop-blur-sm border-0">
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
          <CardDescription>
            Popular questions based on user search behavior analysis
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-medium">How many treatments are needed for tattoo removal?</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Usually 3-10 treatments, depending on tattoo size, color, age, and individual skin type.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-medium">Will tattoo removal leave scars?</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Modern laser technology rarely leaves visible scars, but individual differences exist. We recommend choosing a professional doctor.
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-medium">Can I remove tattoos at home?</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Strongly not recommended. Home methods are high-risk, ineffective, and may cause infection and permanent scarring.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-medium">How long does tattoo removal take?</h4>
                <p className="text-sm text-gray-600 mt-1">
                  The complete process usually takes 6-18 months, including treatment intervals and recovery time.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      </div>
    </div>
  )
} 