declare module 'react-grid-system' {
    import * as React from 'react';
    enum Align {
        Normal = "normal",
        Start = "start",
        Center = "center",
        End = "end"
    }
    type Offsets = {
        xs?: boolean,
        sm?: boolean,
        md?: boolean,
        lg?: boolean,
        xl?: boolean
    }
    type Push = {
        xs?: boolean,
        sm?: boolean,
        md?: boolean,
        lg?: boolean,
        xl?: boolean
    }
    type Pull = {
        xs?: boolean,
        sm?: boolean,
        md?: boolean,
        lg?: boolean,
        xl?: boolean
    }
    type ColProps = {
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
        style?: object
    }

    type ContainerProps = {
        xs?: boolean,
        sm?: boolean,
        md?: boolean,
        lg?: boolean,
        xl?: boolean
        fluid?: boolean,
        style?: object
    }

    type RowProps = {
        align?: Align,
        debug?: boolean,
        style?: object,
        nogutter?: boolean
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

    export class Col extends React.Component<ColProps, any> {}
    export class Container extends React.Component<ContainerProps, any> {}
    export class Row extends React.Component<RowProps, any> {}
    export class ClearFix extends React.Component<ClearFixProps, any> {}
    export class Hidden extends React.Component<HiddenProps, any> {}
    export class ScreenClassRender extends React.Component<ScreenClassRenderProps, any> {}
    export class Visible extends React.Component<VisibleProps, any> {}
}
