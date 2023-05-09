import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    xType?: string
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        xType,
        className,
        disabled,
        ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    const finalClassName = s.button +
        (disabled ? ` ${s.disabled}` : '') +
        (xType === 'red' && !disabled ? ` ${s.red}` : '') +
        (className ? ` ${className}` : '');

        // + (disabled
        //         ? ...
        //         : xType === 'red'
        //             ? ...

    // задачка на смешивание классов

    return (
        <>
        /*<button
            disabled={disabled}
            className={finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />*/
        // Для кнопки по умолчанию:
        <button className={`button default${className ? ` ${className}` : ''}`}
                disabled={disabled} {...restProps}/>

// Для вторичной кнопки:
    <button className={`button secondary${className ? ` ${className}` : ''}`}
            disabled={disabled} {...restProps}/>
    </>
    )
}
//lfd
export default SuperButton
