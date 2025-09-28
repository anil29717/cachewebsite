import { useEffect, useState, useRef } from "react";
import { Star, Award, Users, TrendingUp } from "lucide-react";

export function Partners() {
  const stats = [
    { number: 100, suffix: "+", label: "Technology Partners", icon: Star },
    { number: 300, suffix: "+", label: "Certified Engineers", icon: Award },
    { number: 34, suffix: "+", label: "Years Partnership", icon: Users }
    // { number: 99.9, suffix: "%", label: "Success Rate", icon: TrendingUp }
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const [trigger, setTrigger] = useState(0);

  // IntersectionObserver to re-trigger animation every time visible
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTrigger((prev) => prev + 1);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Partnership Stats */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-lg">
          <div className="grid grid-cols-3 gap-4 sm:gap-8">
            {stats.map((stat, index) => (
              <StatCounter
                key={`${index}-${trigger}`}
                value={stat.number}
                suffix={stat.suffix}
                label={stat.label}
                Icon={stat.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCounter({
  value,
  suffix,
  label,
  Icon
}: {
  value: number;
  suffix: string;
  label: string;
  Icon: React.ElementType;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startValue = 0;
    const duration = 2000;
    const startTime = performance.now();

    function animate(currentTime: number) {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const eased = easeOutCubic(progress);
      setCount(
        parseFloat((startValue + (value - startValue) * eased).toFixed(1))
      );
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [value]);

  return (
    <div className="flex flex-col items-center text-center space-y-3 w-full">
      {/* Icon with circle background */}
      <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-red-100 flex items-center justify-center">
        <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-red-500" />
      </div>
      <div className="text-lg sm:text-3xl font-bold text-red-500">
        {Number.isInteger(value) ? Math.round(count) : count}
        {suffix}
      </div>
      <div className="text-gray-600 text-xs sm:text-base font-medium">
        {label}
      </div>
    </div>
  );
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}
