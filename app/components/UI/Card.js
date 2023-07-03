import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function Card({children}) {
  return (
<div className="bg-blue shadow-md rounded-lg">{children}
</div>

  )
};

