import React from "react";

interface BadgeText {
  text: string;
}

const Badge = ({ text }: BadgeText) => {
  return (
    <div className="px-4 py-1.5 rounded-lg bg-[#749B3F]/10">
      <span className="text-lg font-bold text-[#749B3F]">{text}</span>
    </div>
  );
};

export default Badge;
