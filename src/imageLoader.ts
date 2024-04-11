'use client'

import { ImageLoaderProps } from "next/image"

export default function imageLoader({ src, width, quality }: ImageLoaderProps) {
  return process.env.NODE_ENV === 'production'
    ? `https://www.elderbrew.com/${src}?w=${width}&q=${quality || 75}`
    : `/_next/image?url=${src}&w=${width}&q=${quality || 75}`;
}