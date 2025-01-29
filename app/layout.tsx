import React from 'react'
import "./globals.css";

export default function layout({children}: any) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  )
}
