declare module 'react-grid-system' {
    import * as React from 'react';

    type Align = 'normal' | 'start' | 'center' | 'end'
    type Justify = 'start' | 'center' | 'end' | 'between' | 'around' | 'initial' | 'inherit';

    type Offsets = {
        xs?: number,
        sm?: number,
        md?: number,
        lg?: number,
        xl?: number
    }

    type Push = {
        xs?: number,
        sm?: number,
        md?: number,
        lg?: number,
        xl?: number
    }

    type Pull = {
        xs?: number,
        sm?: number,
        md?: number,
        lg?: number,
        xl?: number
    }

    type ColProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
        debug?: boolean,
        align?: Align
        xs?: number,
        sm?: number,
        md?: number,
        lg?: number,
        xl?: number,
        offset?: Offsets,
        push?: Push,
        pull?: Pull,
        style?: object,
        component?: () => string | string
    }

    type ContainerProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
        xs?: boolean,
        sm?: boolean,
        md?: boolean,
        lg?: boolean,
        xl?: boolean
        fluid?: boolean,
        style?: object,
        component?: () => string | string
    }

    type RowProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
        align?: Align,
        justify?: Justify,
        debug?: boolean,
        style?: object,
        nogutter?: boolean,
        component?: () => string | string
    }

    type ClearFixProps = {
        xs?: boolean,
        sm?: boolean,
        md?: boolean,
        lg?: boolean,
        xl?: boolean
    }

    type HiddenProps = {
        xs?: boolean,
        sm?: boolean,
        md?: boolean,
        lg?: boolean,
        xl?: boolean
    }

    type ScreenClassRenderProps = {
        render?: Function
    }

    type VisibleProps = {
        xs?: boolean,
        sm?: boolean,
        md?: boolean,
        lg?: boolean,
        xl?: boolean
    }

    type Configuration = {
        breakpoints?: Array<number>,
        containerWidths?: Array<number>,
        gutterWidth?: number,
        gridColumns?: number,
        defaultScreenClass?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    }

    type ScreenClassProviderProps = {
        children: React.ReactNode
    }

    export function setConfiguration(configuration: Configuration): void

    export class Col extends React.Component<ColProps, any> { }
    export class Container extends React.Component<ContainerProps, any> { }
    export class Row extends React.Component<RowProps, any> { }
    export class ClearFix extends React.Component<ClearFixProps, any> { }
    export class Hidden extends React.Component<HiddenProps, any> { }
    export class ScreenClassRender extends React.Component<ScreenClassRenderProps, any> { }
    export class Visible extends React.Component<VisibleProps, any> { }
    export class ScreenClassProvider extends React.Component<ScreenClassProviderProps, any> { }
}
