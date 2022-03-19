import React from 'react'

import { Modal } from './menu_styles'

type MenuModalProps = {
  show?: boolean
  children?: React.ReactNode
}

export const MenuModal = ({ show, children }: MenuModalProps) => (
  <Modal show={!!show}>{children}</Modal>
)
