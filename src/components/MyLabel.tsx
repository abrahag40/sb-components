import './myLabel.css'

export interface MyLabelProps {
  /**
   * Este es el mensaje que se va a mostrar en la etiqueta
   */
  label: string;
  /**
   * Tamaño del label
   */
  size: 'normal' | 'h1' | 'h2' | 'h3';
  /**
   * Color del texto
   */
  color?: 'primary' | 'secondary' | 'tertiary';
  /**
   * Letras mayusculas
   */
  allCaps?: boolean;
  /**
   * Color personalizado
   */
  fontColor?: string;
}

export const MyLabel = ( {
  label = 'No Label',
  size  = 'h1',
  color = 'primary',
  allCaps = false,
  fontColor,
}: MyLabelProps ) => {
  return (
    <span 
      className={ `label ${ size } text-${ color }` }
      style={{ 
        color: fontColor
      }}
    >
      { allCaps ? label.toUpperCase() : label }
    </span>
  )
}