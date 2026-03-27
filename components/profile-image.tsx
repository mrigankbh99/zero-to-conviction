import Image from 'next/image'
import fs from 'fs'
import path from 'path'

function profileImageExists(): boolean {
  try {
    return fs.existsSync(path.join(process.cwd(), 'public', 'mrigank.jpg'))
  } catch {
    return false
  }
}

export default function ProfileImage() {
  const hasImage = profileImageExists()

  if (!hasImage) {
    return (
      <div className="w-40 h-40 bg-surface-container border border-outline-variant/30 flex items-center justify-center flex-shrink-0">
        <span className="font-headline text-5xl font-bold text-on-surface-variant">M</span>
      </div>
    )
  }

  return (
    <div className="aspect-square w-40 grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden border border-outline-variant/30 flex-shrink-0">
      <Image
        src="/mrigank.jpg"
        width={160}
        height={160}
        alt="Mrigank"
        className="w-full h-full object-cover object-top"
        priority
      />
    </div>
  )
}
