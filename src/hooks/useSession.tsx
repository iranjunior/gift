/* eslint-disable indent */
import React, { useEffect, useState } from 'react'
import { StorageSessionItens, BannerNav } from '../storage/storage'

export function useSession(): [
  BannerNav,
  React.Dispatch<React.SetStateAction<BannerNav>>
] {
  const storage = window.sessionStorage
  const value = parseState<StorageSessionItens>(storage.getItem('farme')!)
  const [item, setItem] = useState(value.banner_nav)

  useEffect(() => {
    storage.setItem('farme', JSON.stringify({ ...value, banner_nav: item }))
  }, [item])

  return [item, setItem]
}

function parseState<S>(state: string): S {
  return JSON.parse(state)
}
