import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  variant?: 'header' | 'footer' | 'mobile'
}

export default function Logo({ variant = 'header' }: LogoProps) {
  const sizes = {
    header: { width: 48, height: 48, textSize: 'text-xl', subtext: 'text-xs' },
    footer: { width: 40, height: 40, textSize: 'text-sm', subtext: 'text-xs' },
    mobile: { width: 36, height: 36, textSize: 'text-lg', subtext: 'text-[10px]' }
  }

  const size = sizes[variant]

  return (
    <Link href="/" className="flex items-center space-x-2 group">
      <div className="relative" style={{ width: size.width, height: size.height }}>
        <Image
          src="/logo.png"
          alt="Huanqiu Precious Metal Logo"
          fill
          className="object-contain"
          priority={variant === 'header'}
        />
      </div>
      <div>
        <div>
          <span className={`font-bold ${size.textSize}`}>HUANQIU</span>
          <span className={`text-yellow-500 font-bold ${size.textSize}`}> PRECIOUS METAL</span>
        </div>
        <p className={`text-gray-400 ${size.subtext}`}>Trading Limited - Kampala, Uganda</p>
      </div>
    </Link>
  )
}