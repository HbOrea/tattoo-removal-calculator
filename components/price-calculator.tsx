"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calculator, DollarSign, Clock, Palette, Target, MapPin, TrendingUp, Shield, AlertCircle } from "lucide-react"

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
  country: string
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
    country: "us",
    region: "us_average"
  })

  const [priceBreakdown, setPriceBreakdown] = useState<PriceBreakdown | null>(null)

  // 国家数据
  const countries = {
    us: { name: "United States", regions: {
      us_average: "US Average",
      us_nyc_la: "New York / Los Angeles",
      us_other_cities: "Other US Cities",
      us_california: "California",
      us_new_york: "New York",
      us_florida: "Florida",
      us_texas: "Texas",
      us_illinois: "Illinois",
      us_pennsylvania: "Pennsylvania",
      us_ohio: "Ohio",
      us_michigan: "Michigan",
      us_georgia: "Georgia",
      us_north_carolina: "North Carolina",
      us_virginia: "Virginia",
      us_new_jersey: "New Jersey",
      us_washington: "Washington",
      us_massachusetts: "Massachusetts",
      us_tennessee: "Tennessee",
      us_indiana: "Indiana",
      us_missouri: "Missouri",
      us_wisconsin: "Wisconsin",
      us_maryland: "Maryland",
      us_minnesota: "Minnesota",
      us_colorado: "Colorado",
      us_louisiana: "Louisiana",
      us_alabama: "Alabama",
      us_kentucky: "Kentucky",
      us_south_carolina: "South Carolina",
      us_oregon: "Oregon",
      us_oklahoma: "Oklahoma",
      us_connecticut: "Connecticut",
      us_utah: "Utah",
      us_iowa: "Iowa",
      us_arkansas: "Arkansas",
      us_mississippi: "Mississippi",
      us_kansas: "Kansas",
      us_west_virginia: "West Virginia",
      us_nebraska: "Nebraska",
      us_idaho: "Idaho",
      us_new_hampshire: "New Hampshire",
      us_nevada: "Nevada",
      us_maine: "Maine",
      us_rhode_island: "Rhode Island",
      us_montana: "Montana",
      us_delaware: "Delaware",
      us_south_dakota: "South Dakota",
      us_north_dakota: "North Dakota",
      us_alaska: "Alaska",
      us_vermont: "Vermont",
      us_wyoming: "Wyoming",
      us_new_mexico: "New Mexico",
      us_hawaii: "Hawaii",
      us_district_columbia: "District of Columbia",
      us_arizona: "Arizona"
    }},
    uk: { name: "United Kingdom", regions: {
      uk_london: "London",
      uk_manchester: "Manchester",
      uk_birmingham: "Birmingham",
      uk_glasgow: "Glasgow",
      uk_liverpool: "Liverpool",
      uk_leeds: "Leeds",
      uk_sheffield: "Sheffield",
      uk_edinburgh: "Edinburgh",
      uk_bristol: "Bristol",
      uk_cardiff: "Cardiff",
      uk_belfast: "Belfast",
      uk_newcastle: "Newcastle",
      uk_other: "Other UK Cities"
    }},
    cn: { name: "China", regions: {
      cn_beijing: "Beijing",
      cn_shanghai: "Shanghai",
      cn_guangzhou: "Guangzhou",
      cn_shenzhen: "Shenzhen",
      cn_chengdu: "Chengdu",
      cn_hangzhou: "Hangzhou",
      cn_nanjing: "Nanjing",
      cn_wuhan: "Wuhan",
      cn_xian: "Xi'an",
      cn_chongqing: "Chongqing",
      cn_tianjin: "Tianjin",
      cn_suzhou: "Suzhou",
      cn_dongguan: "Dongguan",
      cn_foshan: "Foshan",
      cn_ningbo: "Ningbo",
      cn_wuxi: "Wuxi",
      cn_changsha: "Changsha",
      cn_qingdao: "Qingdao",
      cn_dalian: "Dalian",
      cn_xiamen: "Xiamen",
      cn_jinan: "Jinan",
      cn_haerbin: "Harbin",
      cn_shenyang: "Shenyang",
      cn_changchun: "Changchun",
      cn_shijiazhuang: "Shijiazhuang",
      cn_taiyuan: "Taiyuan",
      cn_huhehaote: "Hohhot",
      cn_zhengzhou: "Zhengzhou",
      cn_hefei: "Hefei",
      cn_nanchang: "Nanchang",
      cn_fuzhou: "Fuzhou",
      cn_kunming: "Kunming",
      cn_guiyang: "Guiyang",
      cn_nanning: "Nanning",
      cn_haikou: "Haikou",
      cn_lhasa: "Lhasa",
      cn_xining: "Xining",
      cn_yinchuan: "Yinchuan",
      cn_urumqi: "Urumqi",
      cn_other: "Other Chinese Cities"
    }},
    ca: { name: "Canada", regions: {
      ca_toronto: "Toronto",
      ca_vancouver: "Vancouver",
      ca_montreal: "Montreal",
      ca_calgary: "Calgary",
      ca_ottawa: "Ottawa",
      ca_edmonton: "Edmonton",
      ca_winnipeg: "Winnipeg",
      ca_quebec: "Quebec City",
      ca_hamilton: "Hamilton",
      ca_kitchener: "Kitchener",
      ca_london: "London",
      ca_victoria: "Victoria",
      ca_halifax: "Halifax",
      ca_other: "Other Canadian Cities"
    }},
    au: { name: "Australia", regions: {
      au_sydney: "Sydney",
      au_melbourne: "Melbourne",
      au_brisbane: "Brisbane",
      au_perth: "Perth",
      au_adelaide: "Adelaide",
      au_gold_coast: "Gold Coast",
      au_canberra: "Canberra",
      au_newcastle: "Newcastle",
      au_sunshine_coast: "Sunshine Coast",
      au_central_coast: "Central Coast",
      au_wollongong: "Wollongong",
      au_geelong: "Geelong",
      au_hobart: "Hobart",
      au_darwin: "Darwin",
      au_other: "Other Australian Cities"
    }},
    de: { name: "Germany", regions: {
      de_berlin: "Berlin",
      de_munich: "Munich",
      de_hamburg: "Hamburg",
      de_cologne: "Cologne",
      de_frankfurt: "Frankfurt",
      de_stuttgart: "Stuttgart",
      de_dusseldorf: "Düsseldorf",
      de_leipzig: "Leipzig",
      de_dortmund: "Dortmund",
      de_essen: "Essen",
      de_dresden: "Dresden",
      de_hanover: "Hanover",
      de_nuremberg: "Nuremberg",
      de_duisburg: "Duisburg",
      de_bochum: "Bochum",
      de_wuppertal: "Wuppertal",
      de_bielefeld: "Bielefeld",
      de_bonn: "Bonn",
      de_mannheim: "Mannheim",
      de_karlsruhe: "Karlsruhe",
      de_other: "Other German Cities"
    }},
    fr: { name: "France", regions: {
      fr_paris: "Paris",
      fr_marseille: "Marseille",
      fr_lyon: "Lyon",
      fr_toulouse: "Toulouse",
      fr_nice: "Nice",
      fr_nantes: "Nantes",
      fr_strasbourg: "Strasbourg",
      fr_montpellier: "Montpellier",
      fr_bordeaux: "Bordeaux",
      fr_lille: "Lille",
      fr_rennes: "Rennes",
      fr_reims: "Reims",
      fr_saint_etienne: "Saint-Étienne",
      fr_toulon: "Toulon",
      fr_le_havre: "Le Havre",
      fr_grenoble: "Grenoble",
      fr_dijon: "Dijon",
      fr_angers: "Angers",
      fr_villeurbanne: "Villeurbanne",
      fr_le_mans: "Le Mans",
      fr_other: "Other French Cities"
    }},
    jp: { name: "Japan", regions: {
      jp_tokyo: "Tokyo",
      jp_yokohama: "Yokohama",
      jp_osaka: "Osaka",
      jp_nagoya: "Nagoya",
      jp_sapporo: "Sapporo",
      jp_fukuoka: "Fukuoka",
      jp_kobe: "Kobe",
      jp_kyoto: "Kyoto",
      jp_kawasaki: "Kawasaki",
      jp_saitama: "Saitama",
      jp_hiroshima: "Hiroshima",
      jp_sendai: "Sendai",
      jp_chiba: "Chiba",
      jp_kitakyushu: "Kitakyushu",
      jp_sakai: "Sakai",
      jp_niigata: "Niigata",
      jp_hamamatsu: "Hamamatsu",
      jp_kumamoto: "Kumamoto",
      jp_sagamihara: "Sagamihara",
      jp_shizuoka: "Shizuoka",
      jp_okayama: "Okayama",
      jp_other: "Other Japanese Cities"
    }},
    kr: { name: "South Korea", regions: {
      kr_seoul: "Seoul",
      kr_busan: "Busan",
      kr_incheon: "Incheon",
      kr_daegu: "Daegu",
      kr_daejeon: "Daejeon",
      kr_gwangju: "Gwangju",
      kr_suwon: "Suwon",
      kr_ulsan: "Ulsan",
      kr_seongnam: "Seongnam",
      kr_bucheon: "Bucheon",
      kr_ansan: "Ansan",
      kr_jeonju: "Jeonju",
      kr_anyang: "Anyang",
      kr_pohang: "Pohang",
      kr_changwon: "Changwon",
      kr_jeju: "Jeju",
      kr_other: "Other Korean Cities"
    }},
    sg: { name: "Singapore", regions: {
      sg_singapore: "Singapore"
    }},
    other: { name: "Other Countries", regions: {
      other_average: "Average"
    }}
  }

  // 处理国家变化
  const handleCountryChange = (country: string) => {
    const newCountry = country as keyof typeof countries
    const defaultRegion = Object.keys(countries[newCountry].regions)[0]
    setTattooData({
      ...tattooData,
      country: newCountry,
      region: defaultRegion
    })
  }

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

    // 地区系数 - 基于实际价格数据计算
    const regionalFactors = {
      // 美国地区 - 基于us_price.md的实际数据计算
      // 基准价格：$355 (Colorado)，其他地区相对于此计算系数
      us_average: 1.0, // 平均价格作为基准
      us_nyc_la: 1.3, // 纽约/洛杉矶高价格地区
      us_other_cities: 0.9, // 其他城市
      us_california: 1.23, // $437 / $355 = 1.23
      us_new_york: 1.10, // $389 / $355 = 1.10
      us_florida: 0.98, // $349 / $355 = 0.98
      us_texas: 0.92, // $326 / $355 = 0.92
      us_illinois: 0.98, // $349 / $355 = 0.98
      us_pennsylvania: 0.97, // $344 / $355 = 0.97
      us_ohio: 0.90, // $319 / $355 = 0.90
      us_michigan: 0.90, // $318 / $355 = 0.90
      us_georgia: 0.88, // $313 / $355 = 0.88
      us_north_carolina: 0.93, // $329 / $355 = 0.93
      us_virginia: 0.97, // $345 / $355 = 0.97
      us_new_jersey: 1.09, // $388 / $355 = 1.09
      us_washington: 1.09, // $387 / $355 = 1.09
      us_massachusetts: 1.09, // $387 / $355 = 1.09
      us_tennessee: 0.90, // $321 / $355 = 0.90
      us_indiana: 0.90, // $318 / $355 = 0.90
      us_missouri: 0.87, // $309 / $355 = 0.87
      us_wisconsin: 0.93, // $330 / $355 = 0.93
      us_maryland: 1.17, // $416 / $355 = 1.17
      us_minnesota: 0.92, // $326 / $355 = 0.92
      us_colorado: 1.0, // $355 / $355 = 1.0 (基准)
      us_louisiana: 0.94, // $333 / $355 = 0.94
      us_alabama: 0.81, // $287 / $355 = 0.81
      us_kentucky: 0.95, // $336 / $355 = 0.95
      us_south_carolina: 0.92, // $327 / $355 = 0.92
      us_oregon: 1.07, // $380 / $355 = 1.07
      us_oklahoma: 0.85, // $303 / $355 = 0.85
      us_connecticut: 1.02, // $363 / $355 = 1.02
      us_utah: 1.03, // $364 / $355 = 1.03
      us_iowa: 0.88, // $312 / $355 = 0.88
      us_arkansas: 0.84, // $299 / $355 = 0.84
      us_mississippi: 0.86, // $307 / $355 = 0.86
      us_kansas: 0.89, // $315 / $355 = 0.89
      us_west_virginia: 0.87, // $310 / $355 = 0.87
      us_nebraska: 0.89, // $316 / $355 = 0.89
      us_idaho: 1.0, // $356 / $355 = 1.0
      us_new_hampshire: 1.05, // $372 / $355 = 1.05
      us_nevada: 0.97, // $346 / $355 = 0.97
      us_maine: 1.02, // $362 / $355 = 1.02
      us_rhode_island: 1.03, // $364 / $355 = 1.03
      us_montana: 0.99, // $350 / $355 = 0.99
      us_delaware: 0.99, // $351 / $355 = 0.99
      us_south_dakota: 0.89, // $317 / $355 = 0.89
      us_north_dakota: 0.91, // $323 / $355 = 0.91
      us_alaska: 1.21, // $430 / $355 = 1.21
      us_vermont: 1.04, // $369 / $355 = 1.04
      us_wyoming: 0.91, // $324 / $355 = 0.91
      us_new_mexico: 0.88, // $313 / $355 = 0.88
      us_hawaii: 1.58, // $562 / $355 = 1.58
      us_district_columbia: 1.35, // $478 / $355 = 1.35
      us_arizona: 1.01, // $360 / $355 = 1.01
      
      // 英国地区
      uk_london: 1.2,
      uk_manchester: 1.0,
      uk_birmingham: 0.95,
      uk_glasgow: 0.9,
      uk_liverpool: 0.9,
      uk_leeds: 0.9,
      uk_sheffield: 0.9,
      uk_edinburgh: 0.95,
      uk_bristol: 0.95,
      uk_cardiff: 0.9,
      uk_belfast: 0.9,
      uk_newcastle: 0.9,
      uk_other: 0.85,
      
      // 中国地区
      cn_beijing: 0.8,
      cn_shanghai: 0.8,
      cn_guangzhou: 0.75,
      cn_shenzhen: 0.75,
      cn_chengdu: 0.7,
      cn_hangzhou: 0.75,
      cn_nanjing: 0.7,
      cn_wuhan: 0.7,
      cn_xian: 0.7,
      cn_chongqing: 0.7,
      cn_tianjin: 0.7,
      cn_suzhou: 0.7,
      cn_dongguan: 0.7,
      cn_foshan: 0.7,
      cn_ningbo: 0.7,
      cn_wuxi: 0.7,
      cn_changsha: 0.7,
      cn_qingdao: 0.7,
      cn_dalian: 0.7,
      cn_xiamen: 0.7,
      cn_jinan: 0.7,
      cn_haerbin: 0.65,
      cn_shenyang: 0.65,
      cn_changchun: 0.65,
      cn_shijiazhuang: 0.65,
      cn_taiyuan: 0.65,
      cn_huhehaote: 0.65,
      cn_zhengzhou: 0.65,
      cn_hefei: 0.65,
      cn_nanchang: 0.65,
      cn_fuzhou: 0.65,
      cn_kunming: 0.65,
      cn_guiyang: 0.65,
      cn_nanning: 0.65,
      cn_haikou: 0.65,
      cn_lhasa: 0.6,
      cn_xining: 0.6,
      cn_yinchuan: 0.6,
      cn_urumqi: 0.6,
      cn_other: 0.6,
      
      // 加拿大地区
      ca_toronto: 1.1,
      ca_vancouver: 1.1,
      ca_montreal: 1.0,
      ca_calgary: 1.0,
      ca_ottawa: 1.0,
      ca_edmonton: 0.95,
      ca_winnipeg: 0.9,
      ca_quebec: 0.9,
      ca_hamilton: 0.95,
      ca_kitchener: 0.9,
      ca_london: 0.9,
      ca_victoria: 1.0,
      ca_halifax: 0.9,
      ca_other: 0.85,
      
      // 澳大利亚地区
      au_sydney: 1.15,
      au_melbourne: 1.1,
      au_brisbane: 1.0,
      au_perth: 1.0,
      au_adelaide: 0.95,
      au_gold_coast: 0.95,
      au_canberra: 1.0,
      au_newcastle: 0.9,
      au_sunshine_coast: 0.9,
      au_central_coast: 0.9,
      au_wollongong: 0.9,
      au_geelong: 0.9,
      au_hobart: 0.9,
      au_darwin: 0.9,
      au_other: 0.85,
      
      // 德国地区
      de_berlin: 1.0,
      de_munich: 1.05,
      de_hamburg: 1.0,
      de_cologne: 0.95,
      de_frankfurt: 1.0,
      de_stuttgart: 0.95,
      de_dusseldorf: 0.95,
      de_leipzig: 0.9,
      de_dortmund: 0.9,
      de_essen: 0.9,
      de_dresden: 0.9,
      de_hanover: 0.9,
      de_nuremberg: 0.9,
      de_duisburg: 0.9,
      de_bochum: 0.9,
      de_wuppertal: 0.9,
      de_bielefeld: 0.9,
      de_bonn: 0.9,
      de_mannheim: 0.9,
      de_karlsruhe: 0.9,
      de_other: 0.85,
      
      // 法国地区
      fr_paris: 1.1,
      fr_marseille: 0.95,
      fr_lyon: 0.95,
      fr_toulouse: 0.9,
      fr_nice: 0.95,
      fr_nantes: 0.9,
      fr_strasbourg: 0.9,
      fr_montpellier: 0.9,
      fr_bordeaux: 0.9,
      fr_lille: 0.9,
      fr_rennes: 0.9,
      fr_reims: 0.9,
      fr_saint_etienne: 0.85,
      fr_toulon: 0.9,
      fr_le_havre: 0.85,
      fr_grenoble: 0.9,
      fr_dijon: 0.9,
      fr_angers: 0.9,
      fr_villeurbanne: 0.9,
      fr_le_mans: 0.9,
      fr_other: 0.85,
      
      // 日本地区
      jp_tokyo: 1.2,
      jp_yokohama: 1.1,
      jp_osaka: 1.1,
      jp_nagoya: 1.0,
      jp_sapporo: 1.0,
      jp_fukuoka: 0.95,
      jp_kobe: 1.0,
      jp_kyoto: 1.0,
      jp_kawasaki: 1.0,
      jp_saitama: 0.95,
      jp_hiroshima: 0.95,
      jp_sendai: 0.95,
      jp_chiba: 0.95,
      jp_kitakyushu: 0.9,
      jp_sakai: 0.95,
      jp_niigata: 0.9,
      jp_hamamatsu: 0.9,
      jp_kumamoto: 0.9,
      jp_sagamihara: 0.9,
      jp_shizuoka: 0.9,
      jp_okayama: 0.9,
      jp_other: 0.85,
      
      // 韩国地区
      kr_seoul: 1.1,
      kr_busan: 1.0,
      kr_incheon: 1.0,
      kr_daegu: 0.95,
      kr_daejeon: 0.95,
      kr_gwangju: 0.9,
      kr_suwon: 0.95,
      kr_ulsan: 0.9,
      kr_seongnam: 0.95,
      kr_bucheon: 0.9,
      kr_ansan: 0.9,
      kr_jeonju: 0.9,
      kr_anyang: 0.9,
      kr_pohang: 0.9,
      kr_changwon: 0.9,
      kr_jeju: 0.9,
      kr_other: 0.85,
      
      // 新加坡
      sg_singapore: 1.0,
      
      // 其他地区
      other_average: 0.8
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
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* 标题区域 */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
          Tattoo Removal Price Estimation
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Get accurate price estimates based on scientific algorithms and professional data
        </p>
      </div>

      <div className="space-y-8">
        {/* Input Form */}
        <Card className="shadow-sm border border-slate-200 bg-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl text-slate-900">
              <Calculator className="h-5 w-5 text-slate-700" />
              Tattoo Information
            </CardTitle>
            <CardDescription className="text-slate-600">
              Please fill in your tattoo details for accurate price estimation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Size */}
            <div className="space-y-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
              <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                <Target className="h-4 w-4 text-slate-600" />
                Tattoo Dimensions (inches)
              </label>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs text-slate-600 font-medium">Length</label>
                  <Input
                    type="number"
                    value={tattooData.length}
                    onChange={(e) => setTattooData({...tattooData, length: parseFloat(e.target.value) || 1})}
                    className="w-full border-slate-300 focus:border-slate-600 focus:ring-slate-600/20"
                    min="0.5"
                    max="10"
                    step="0.1"
                    placeholder="Length"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-slate-600 font-medium">Width</label>
                  <Input
                    type="number"
                    value={tattooData.width}
                    onChange={(e) => setTattooData({...tattooData, width: parseFloat(e.target.value) || 1})}
                    className="w-full border-slate-300 focus:border-slate-600 focus:ring-slate-600/20"
                    min="0.5"
                    max="10"
                    step="0.1"
                    placeholder="Width"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-500 bg-white rounded-lg p-2 border border-slate-200">
                <span>Area:</span>
                <span className="font-semibold text-slate-700">{(tattooData.length * tattooData.width).toFixed(1)} sq inches</span>
              </div>
            </div>

            {/* Color */}
            <div className="space-y-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
              <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                <Palette className="h-4 w-4 text-slate-600" />
                Ink Color
              </label>
              <Select value={tattooData.colors} onValueChange={(value) => setTattooData({...tattooData, colors: value})}>
                <SelectTrigger className="border-slate-300 focus:border-slate-600 focus:ring-slate-600/20">
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
            <div className="space-y-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
              <label className="text-sm font-semibold text-slate-700">Ink Saturation</label>
              <Select value={tattooData.saturation} onValueChange={(value) => setTattooData({...tattooData, saturation: value})}>
                <SelectTrigger className="border-slate-300 focus:border-slate-600 focus:ring-slate-600/20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="line">Line Work</SelectItem>
                  <SelectItem value="filled">Completely Filled</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Layering */}
            <div className="space-y-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
              <label className="text-sm font-semibold text-slate-700">Ink Layering</label>
              <Select value={tattooData.layering} onValueChange={(value) => setTattooData({...tattooData, layering: value})}>
                <SelectTrigger className="border-slate-300 focus:border-slate-600 focus:ring-slate-600/20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="no">No Layering</SelectItem>
                  <SelectItem value="yes">With Layering</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Location */}
            <div className="space-y-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
              <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                <Target className="h-4 w-4 text-slate-600" />
                Tattoo Location
              </label>
              <Select value={tattooData.location} onValueChange={(value) => setTattooData({...tattooData, location: value})}>
                <SelectTrigger className="border-slate-300 focus:border-slate-600 focus:ring-slate-600/20">
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
            <div className="space-y-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
              <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                <Clock className="h-4 w-4 text-slate-600" />
                Tattoo Age (years)
              </label>
              <Input
                type="number"
                value={tattooData.age}
                onChange={(e) => setTattooData({...tattooData, age: parseInt(e.target.value) || 0})}
                className="w-full border-slate-300 focus:border-slate-600 focus:ring-slate-600/20"
                min="0"
                max="20"
                step="1"
                placeholder="Enter age in years"
              />
            </div>

            {/* Scarring */}
            <div className="space-y-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
              <label className="text-sm font-semibold text-slate-700">Scarring</label>
              <Select value={tattooData.scarring} onValueChange={(value) => setTattooData({...tattooData, scarring: value})}>
                <SelectTrigger className="border-slate-300 focus:border-slate-600 focus:ring-slate-600/20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="no">No Scarring</SelectItem>
                  <SelectItem value="yes">With Scarring</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Skin Type */}
            <div className="space-y-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
              <label className="text-sm font-semibold text-slate-700">Skin Type</label>
              <Select value={tattooData.skinType} onValueChange={(value) => setTattooData({...tattooData, skinType: value})}>
                <SelectTrigger className="border-slate-300 focus:border-slate-600 focus:ring-slate-600/20">
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
            <div className="space-y-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
              <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-slate-600" />
                Location
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Country Selection */}
                <div className="space-y-2">
                  <label className="text-xs text-slate-600 font-medium">Country</label>
                  <Select value={tattooData.country} onValueChange={handleCountryChange}>
                    <SelectTrigger className="border-slate-300 focus:border-slate-600 focus:ring-slate-600/20">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">🇺🇸 United States</SelectItem>
                      <SelectItem value="uk">🇬🇧 United Kingdom</SelectItem>
                      <SelectItem value="cn">🇨🇳 China</SelectItem>
                      <SelectItem value="ca">🇨🇦 Canada</SelectItem>
                      <SelectItem value="au">🇦🇺 Australia</SelectItem>
                      <SelectItem value="de">🇩🇪 Germany</SelectItem>
                      <SelectItem value="fr">🇫🇷 France</SelectItem>
                      <SelectItem value="jp">🇯🇵 Japan</SelectItem>
                      <SelectItem value="kr">🇰🇷 South Korea</SelectItem>
                      <SelectItem value="sg">🇸🇬 Singapore</SelectItem>
                      <SelectItem value="other">🌍 Other Countries</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                {/* Region Selection */}
                <div className="space-y-2">
                  <label className="text-xs text-slate-600 font-medium">Region/City</label>
                  <Select value={tattooData.region} onValueChange={(value) => setTattooData({...tattooData, region: value})}>
                    <SelectTrigger className="border-slate-300 focus:border-slate-600 focus:ring-slate-600/20">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(countries[tattooData.country as keyof typeof countries].regions).map(([key, name]) => (
                        <SelectItem key={key} value={key}>{name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <Button 
              onClick={calculatePrice} 
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 text-lg"
            >
              <Calculator className="h-5 w-5 mr-2" />
              Calculate Price
            </Button>
          </CardContent>
        </Card>

        {/* Price Results */}
        <Card className="shadow-sm border border-slate-200 bg-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl text-slate-900">
              <DollarSign className="h-5 w-5 text-slate-700" />
              Price Estimation Results
            </CardTitle>
            <CardDescription className="text-slate-600">
              Price breakdown based on your information and scientific algorithms
            </CardDescription>
          </CardHeader>
          <CardContent>
            {priceBreakdown ? (
              <div className="space-y-6">
                {/* 总价格 */}
                <div className="text-center p-8 bg-slate-900 rounded-lg text-white">
                  <div className="text-4xl font-bold mb-2">
                    ${priceBreakdown.totalCost.toLocaleString()}
                  </div>
                  <div className="text-slate-300 text-lg font-medium mb-2">
                    Total Cost Estimate
                  </div>
                  <div className="text-slate-400 text-sm flex items-center justify-center gap-2">
                    <Shield className="h-4 w-4" />
                    Calculated using professional algorithms
                  </div>
                </div>

                {/* 治疗信息 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="w-12 h-12 mx-auto mb-4 bg-slate-700 rounded-full flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-slate-900 mb-2">
                      {priceBreakdown.totalSessions}
                    </div>
                    <div className="text-sm text-slate-700 font-semibold">Expected Sessions</div>
                    <div className="text-xs text-slate-600 mt-2">Based on complexity analysis</div>
                  </div>
                  <div className="text-center p-6 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="w-12 h-12 mx-auto mb-4 bg-slate-700 rounded-full flex items-center justify-center">
                      <DollarSign className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-slate-900 mb-2">
                      ${priceBreakdown.costPerSession}
                    </div>
                    <div className="text-sm text-slate-700 font-semibold">Cost Per Session</div>
                    <div className="text-xs text-slate-600 mt-2">Average per treatment</div>
                  </div>
                </div>

                {/* Regional Factor */}
                <div className="p-6 bg-slate-50 rounded-lg border border-slate-200">
                  <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Regional Adjustment
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm bg-white rounded-lg p-4 border border-slate-200">
                      <span className="text-slate-700 font-medium">Selected Location</span>
                      <span className="font-bold text-slate-900 text-lg">
                        {countries[tattooData.country as keyof typeof countries]?.name} - {countries[tattooData.country as keyof typeof countries]?.regions[tattooData.region]}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm bg-white rounded-lg p-4 border border-slate-200">
                      <span className="text-slate-700 font-medium">Regional Factor</span>
                      <span className="font-bold text-slate-900 text-xl">
                        ×{priceBreakdown.regionalFactor.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Important Notice */}
                <div className="p-6 bg-amber-50 border border-amber-200 rounded-lg">
                  <h5 className="font-semibold text-amber-900 mb-4 flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-amber-600" />
                    Important Notice
                  </h5>
                  <ul className="text-sm text-amber-800 space-y-3">
                    <li className="flex items-start gap-3 p-3 bg-white rounded-lg border border-amber-100">
                      <span className="text-amber-600 mt-1 font-bold">•</span>
                      <span>This price is only an estimate, actual prices may vary by clinic</span>
                    </li>
                    <li className="flex items-start gap-3 p-3 bg-white rounded-lg border border-amber-100">
                      <span className="text-amber-600 mt-1 font-bold">•</span>
                      <span>We recommend consulting a professional doctor for accurate quotes</span>
                    </li>
                    <li className="flex items-start gap-3 p-3 bg-white rounded-lg border border-amber-100">
                      <span className="text-amber-600 mt-1 font-bold">•</span>
                      <span>Number of treatments may vary based on individual circumstances</span>
                    </li>
                    <li className="flex items-start gap-3 p-3 bg-white rounded-lg border border-amber-100">
                      <span className="text-amber-600 mt-1 font-bold">•</span>
                      <span>Prices are calculated in USD, please refer to current exchange rates for other currencies</span>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="text-center py-16 text-slate-500">
                <div className="w-20 h-20 mx-auto mb-6 bg-slate-100 rounded-full flex items-center justify-center">
                  <Calculator className="h-10 w-10 text-slate-400" />
                </div>
                <p className="text-lg font-medium text-slate-600 mb-2">Ready to Calculate</p>
                <p className="text-slate-500">Please fill in the information above and click &quot;Calculate Price&quot; button</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 