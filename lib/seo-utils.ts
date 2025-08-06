export function calculateKeywordDensity(text: string, keyword: string): number {
  const words = text.toLowerCase().split(/\s+/);
  const keywordLower = keyword.toLowerCase();
  const keywordWords = keywordLower.split(/\s+/);
  
  let keywordCount = 0;
  
  // 计算关键词出现次数
  for (let i = 0; i <= words.length - keywordWords.length; i++) {
    let match = true;
    for (let j = 0; j < keywordWords.length; j++) {
      if (words[i + j] !== keywordWords[j]) {
        match = false;
        break;
      }
    }
    if (match) {
      keywordCount++;
    }
  }
  
  const totalWords = words.length;
  const density = (keywordCount / totalWords) * 100;
  
  return Math.round(density * 100) / 100; // 保留两位小数
}

export function getSeoContentStats() {
  const seoContent = `
    Understanding how much does tattoo removal cost is crucial for anyone considering this procedure. 
    The tattoo removal cost varies significantly based on multiple factors, making it essential to 
    get accurate estimates before starting treatment. Our comprehensive guide helps you understand all aspects 
    of tattoo removal pricing and what influences the final cost.

    The average tattoo removal cost ranges from $200 to $2,000 per session, with most people 
    requiring 3-10 sessions for complete removal. When calculating how much does tattoo removal cost, 
    consider factors like tattoo size, ink colors, skin type, and treatment location. Professional laser 
    tattoo removal pricing typically includes consultation fees, treatment sessions, and follow-up care.

    When researching how much does tattoo removal cost, it's important to understand that 
    tattoo removal pricing is not a one-time expense. Most individuals need multiple sessions 
    spaced 6-8 weeks apart. The total tattoo removal cost can range from $1,000 to $10,000 
    for complete removal, depending on the complexity of your specific case.

    Professional clinics offering laser tattoo removal pricing typically charge per session 
    or per square inch. Some clinics provide package deals that can reduce the overall tattoo removal cost. 
    It's essential to choose a qualified provider, as improper treatment can increase the total cost and 
    potentially cause scarring or other complications.

    Understanding how much does tattoo removal cost requires careful consideration of multiple factors. 
    While tattoo removal pricing can be significant, it's an investment in your confidence and well-being. 
    The tattoo removal cost should be weighed against the benefits of professional treatment and 
    the peace of mind that comes with choosing experienced practitioners. Use our calculator to get a personalized 
    estimate of your tattoo removal pricing and make an informed decision about your treatment journey.
  `;

  const keyword = "how much does tattoo removal cost";
  const density = calculateKeywordDensity(seoContent, keyword);
  
  return {
    totalWords: seoContent.split(/\s+/).length,
    keywordOccurrences: (seoContent.toLowerCase().match(new RegExp(keyword.toLowerCase(), 'g')) || []).length,
    keywordDensity: density,
    isOptimal: density >= 3 && density <= 5
  };
} 