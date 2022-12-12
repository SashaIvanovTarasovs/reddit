import { useSession } from 'next-auth/react'
import React from 'react'

type Props = {
  seed?: string
  large?: boolean
}

function Avatar({ seed, large }: Props) {
  const { data: session } = useSession()
  return (
    <img
      className={`h-10 w-10 rounded-full border border-gray-300 bg-white ${
        large && 'h-20 w-20'
      }`}
      src={`https://avatars.dicebear.com/api/open-peeps/${
        seed || session?.user?.name || 'placeholder'
      }.svg`}
      alt=""
    />
  )
}

export default Avatar
