import Picture from '../Picture/Picture';

/* 展示我的徽章 */
function Badge(props) {
  return (
    <div className="mb-[16px]">
      <Picture className="mr-[8px] w-[200px] h-[200px]"
        imageClassName="w-[200px] h-[200px]"
        webpSrc="/images/badge/microsoft-e-d-divisional-fix-hack-learn-fhl-2024-pa.webp"
        src="/images/badge/microsoft-e-d-divisional-fix-hack-learn-fhl-2024-pa.png"
        alt="Microsoft E+D Divisional Fix Hack Learn FHL 2024 PA"
      />
      <Picture className="w-[200px] h-[200px]"
        imageClassName="w-[200px] h-[200px]"
        avifSrc="/images/badge/microsoft-global-hackathon-2023.avif"
        webpSrc="/images/badge/microsoft-global-hackathon-2023.webp"
        src="/images/badge/microsoft-global-hackathon-2023.png"
        alt="Microsoft Global Hackathon 2023"
      />
    </div>
  );
}

export default Badge;