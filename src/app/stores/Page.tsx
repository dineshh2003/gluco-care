import React from 'react'
import dynamic from 'next/dynamic';

const OpenStreetMap = dynamic(() => import('@/components/MapComponent'), {
  ssr: false,
});

const StorePage = () => {
  return (
    <div>
      <OpenStreetMap />
    </div>
  )
}

export default StorePage

