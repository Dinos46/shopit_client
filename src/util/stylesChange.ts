import React, { FC, PropsWithChildren, useEffect } from 'react'

export const onHeaderStyleChange = (state: string) => {
  useEffect(() => {
    switch (state) {
      case 'header':
        document.body.classList.add('header-initial')
        window.onscroll = () => {
          if (window.pageYOffset >= 85) {
            document.body.classList.add('header-bg')
            document.body.classList.remove('header-initial')
          } else {
            document.body.classList.add('header-initial')
            document.body.classList.remove('header-bg')
          }
        }
        break

      default:
        document.body.classList.remove('header-initial')
        document.body.classList.add('header-bg')
        break
    }
    return () => {
      document.body.classList.add('header-initial')
      document.body.classList.remove('header-bg')
    }
  }, [state])
}
