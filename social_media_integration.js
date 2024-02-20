// JavaScript function to share on social media
function shareOnSocialMedia(platform, userAchievement) {
  const shareURLs = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(userAchievement)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(document.location.href)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(document.location.href)}&title=${encodeURIComponent(userAchievement)}`
  };

  // Open a new window for the share URL
  if(shareURLs[platform]) {
    window.open(shareURLs[platform], '_blank');
  }
}

// Example usage
const userAchievement = "I just reduced my carbon footprint by 10% with EcoInsight! 🌍 #Sustainability #EcoInsight";
shareOnSocialMedia('twitter', userAchievement);