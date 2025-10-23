export function optimizeTitle(title: string, siteName = 'leeworms'): string {
  // 60자 이내로 제한 (구글 검색 결과 표시 기준)
  if (title.length <= 60) return title;

  const truncated = title.substring(0, 57) + '...';
  return truncated;
}

export function optimizeDescription(description: string): string {
  // 160자 이내로 제한 (구글 검색 결과 표시 기준)
  if (description.length <= 160) return description;

  const truncated = description.substring(0, 157) + '...';
  return truncated;
}

export function generateKeywords(tags: string[], title: string): string {
  const baseKeywords = ['백엔드 개발자', '이재근', 'leeworms', '개발 블로그'];
  const titleKeywords = title.split(' ').filter(word => word.length > 2);

  return [...tags, ...baseKeywords, ...titleKeywords]
    .slice(0, 10) // 최대 10개 키워드
    .join(', ');
}
