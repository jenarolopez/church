export interface IModalProps {
  isOpen: boolean, 
  onClose: VoidFunction,
  children: string | React.ReactElement | React.ReactNode | JSX.Element ,
  width?: number
  header: boolean
}