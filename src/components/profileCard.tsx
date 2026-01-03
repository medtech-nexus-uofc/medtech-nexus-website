import React from "react";

type ProfileCardProps = {
  name: string;
  title?: string;
  avatarUrl?: string;
};

export default function ProfileCard({
  name,
  title,
  avatarUrl,
}: ProfileCardProps) {
  return (
    <div className="relative m-8 flex w-56 flex-col items-center rounded-2xl bg-[#C9C1E8] p-4 shadow-md">
      <div className="absolute -top-6 h-8 w-8 rounded-t-3xl bg-[#F1D6D0]"></div>
      <div className="absolute -top-3 flex h-8 w-16 items-center justify-center rounded-t-lg bg-[#F1D6D0]">
        <div className="h-3 w-3 rounded-full bg-white" />
      </div>

      {/* Card */}
      <div className="flex w-full flex-col items-center rounded-xl bg-white p-4 pt-8">
        {/* Photo */}
        <div className="mb-4 flex h-28 w-28 items-center justify-center rounded-full bg-gray-300 text-sm text-gray-600">
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt={`${name} avatar`}
              className="h-full w-full rounded-full object-cover"
            />
          ) : (
            "image here"
          )}
        </div>

        {/* Name */}
        <h2 className="text-lg font-medium text-gray-900">{name}</h2>

        {/* Title */}
        {title && <p className="text-sm text-gray-500">{title}</p>}
      </div>
    </div>
  );
}
