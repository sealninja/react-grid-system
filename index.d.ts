declare module 'react-grid-system' {
    import * as React from 'react';

    type Align = 'normal' | 'start' | 'center' | 'end' | 'stretch'
    type Justify = 'start' | 'center' | 'end' | 'between' | 'around' | 'initial' | 'inherit';
    type Direction = 'column' | 'row' | 'column-reverse' | 'row-reverse'
    type ScreenClass = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    type ScreenClassMap<T> = Partial<Record<ScreenClass, T>>;

    type Offsets = ScreenClassMap<number>;
    type Push = ScreenClassMap<number>;
    type Pull = ScreenClassMap<number>;

    type ColProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
        width?: "auto" | number | string,
        debug?: boolean,
        offset?: Offsets,
        push?: Push,
        pull?: Pull,
        style?: object,
        component?: (() => string) | string
    } & ScreenClassMap<number | "content">;

    type ContainerProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
        fluid?: boolean,
        style?: object,
        component?: (() => string) | string
    } & ScreenClassMap<boolean>;

    type RowProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
        align?: Align,
        justify?: Justify,
        direction?: Direction,
        debug?: boolean,
        style?: object,
        nogutter?: boolean,
        nowrap?: boolean,
        component?: (() => string) | string,
        gutterWidth?: number
    }

    type ClearFixProps = ScreenClassMap<boolean>;
    type HiddenProps = ScreenClassMap<boolean>;

    type ScreenClassRenderProps = {
        render?: Function
    }

    type VisibleProps = ScreenClassMap<boolean>;

    type Configuration = {
        breakpoints?: Array<number>,
        containerWidths?: Array<number>,
        gutterWidth?: number,
        gridColumns?: number,
        defaultScreenClass?: ScreenClass,
        maxScreenClass?: ScreenClass
    }

    type ScreenClassProviderProps = {
        children: React.ReactNode,
        fallbackScreenClass?: ScreenClass,
        useOwnWidth?: boolean
    }

    export function setConfiguration(configuration: Configuration): void
    export function useScreenClass(elementRef?: React.MutableRefObject<any>): ScreenClass

    export class Col extends React.Component<ColProps, any> { }
    export class Container extends React.Component<ContainerProps, any> { }
    export class Row extends React.Component<RowProps, any> { }
    export class ClearFix extends React.Component<ClearFixProps, any> { }
    export class Hidden extends React.Component<HiddenProps, any> { }
    export class ScreenClassRender extends React.Component<ScreenClassRenderProps, any> { }
    export class Visible extends React.Component<VisibleProps, any> { }
    export class ScreenClassProvider extends React.Component<ScreenClassProviderProps, any> { }
}
