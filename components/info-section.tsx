"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertTriangle, Clock, DollarSign, Heart, Shield, Users } from "lucide-react"

export function InfoSection() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12">
      {/* 特色功能 */}
      <div className="grid md:grid-cols-3 gap-8">
        <Card className="text-center shadow-sm border border-slate-200 bg-white">
          <CardHeader>
            <div className="mx-auto w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center mb-4">
              <DollarSign className="h-6 w-6 text-white" />
            </div>
            <CardTitle className="text-lg text-slate-900">Transparent Pricing</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 leading-relaxed">
              Detailed price breakdown including base costs, treatment sessions, regional differences, and more to help you understand every cost
            </p>
          </CardContent>
        </Card>

        <Card className="text-center shadow-sm border border-slate-200 bg-white">
          <CardHeader>
            <div className="mx-auto w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <CardTitle className="text-lg text-slate-900">Professional Guidance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 leading-relaxed">
              Professional pain management advice and risk information to help you make informed decisions
            </p>
          </CardContent>
        </Card>

        <Card className="text-center shadow-sm border border-slate-200 bg-white">
          <CardHeader>
            <div className="mx-auto w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-white" />
            </div>
            <CardTitle className="text-lg text-slate-900">Clinic Recommendations</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 leading-relaxed">
              Professional clinic recommendations based on your location with user reviews and price comparisons
            </p>
          </CardContent>
        </Card>
      </div>

      {/* 详细知识库 */}
      <Tabs defaultValue="process" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-slate-100 border border-slate-200">
          <TabsTrigger value="process" className="data-[state=active]:bg-slate-900 data-[state=active]:text-white">Treatment Process</TabsTrigger>
          <TabsTrigger value="pain" className="data-[state=active]:bg-slate-900 data-[state=active]:text-white">Pain & Risks</TabsTrigger>
          <TabsTrigger value="methods" className="data-[state=active]:bg-slate-900 data-[state=active]:text-white">Treatment Methods</TabsTrigger>
          <TabsTrigger value="care" className="data-[state=active]:bg-slate-900 data-[state=active]:text-white">Care Guide</TabsTrigger>
        </TabsList>

        <TabsContent value="process" className="space-y-4">
          <Card className="shadow-sm border border-slate-200 bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-slate-900">
                <Clock className="h-5 w-5" />
                Complete Tattoo Removal Process
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3 text-slate-900">Pre-Treatment Preparation</h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Professional doctor consultation and assessment</li>
                    <li>• Skin type and tattoo characteristics analysis</li>
                    <li>• Personalized treatment plan development</li>
                    <li>• Understanding treatment risks and expected outcomes</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3 text-slate-900">Treatment Process</h4>
                  <ul className="space-y-2 text-sm text-slate-600">
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
          <Card className="shadow-lg glass-effect backdrop-blur-sm border-0">
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
          <Card className="shadow-lg glass-effect backdrop-blur-sm border-0">
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
          <Card className="shadow-lg glass-effect backdrop-blur-sm border-0">
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
      <Card className="shadow-lg glass-effect backdrop-blur-sm border-0">
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
  )
} 