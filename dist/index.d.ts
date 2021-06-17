import * as React from 'react';
import { default as NextApp, AppContext } from 'next/app';
import { ApplicationInsights, IConfiguration, IConfig } from '@microsoft/applicationinsights-web';
interface WithApplicationInsightsProps {
    pageName: string;
}
declare global {
    interface Window {
        appInsights?: ApplicationInsights;
    }
}
export interface ICustomConfig {
    isEnabled: boolean;
}
export declare const withApplicationInsights: (config: IConfiguration & IConfig & ICustomConfig) => (App: typeof NextApp) => {
    new (props: (WithApplicationInsightsProps & import("next/app").AppInitialProps & {
        Component: import("next").NextComponentType<import("next").NextPageContext, any, {}>;
        router: import("next/dist/client/router").Router;
        __N_SSG?: boolean;
        __N_SSP?: boolean;
    }) | Readonly<WithApplicationInsightsProps & import("next/app").AppInitialProps & {
        Component: import("next").NextComponentType<import("next").NextPageContext, any, {}>;
        router: import("next/dist/client/router").Router;
        __N_SSG?: boolean;
        __N_SSP?: boolean;
    }>): {
        componentDidMount(): void;
        componentDidCatch(error: Error): void;
        initializeAppInsights(): void;
        trackPageView(): void;
        render(): React.DetailedReactHTMLElement<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<WithApplicationInsightsProps & import("next/app").AppInitialProps & {
            Component: import("next").NextComponentType<import("next").NextPageContext, any, {}>;
            router: import("next/dist/client/router").Router;
            __N_SSG?: boolean;
            __N_SSP?: boolean;
        }>) => {} | Pick<{}, K>) | Pick<{}, K>, callback?: () => void): void;
        forceUpdate(callback?: () => void): void;
        readonly props: Readonly<WithApplicationInsightsProps & import("next/app").AppInitialProps & {
            Component: import("next").NextComponentType<import("next").NextPageContext, any, {}>;
            router: import("next/dist/client/router").Router;
            __N_SSG?: boolean;
            __N_SSP?: boolean;
        }> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<WithApplicationInsightsProps & import("next/app").AppInitialProps & {
            Component: import("next").NextComponentType<import("next").NextPageContext, any, {}>;
            router: import("next/dist/client/router").Router;
            __N_SSG?: boolean;
            __N_SSP?: boolean;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<WithApplicationInsightsProps & import("next/app").AppInitialProps & {
            Component: import("next").NextComponentType<import("next").NextPageContext, any, {}>;
            router: import("next/dist/client/router").Router;
            __N_SSG?: boolean;
            __N_SSP?: boolean;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<WithApplicationInsightsProps & import("next/app").AppInitialProps & {
            Component: import("next").NextComponentType<import("next").NextPageContext, any, {}>;
            router: import("next/dist/client/router").Router;
            __N_SSG?: boolean;
            __N_SSP?: boolean;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<WithApplicationInsightsProps & import("next/app").AppInitialProps & {
            Component: import("next").NextComponentType<import("next").NextPageContext, any, {}>;
            router: import("next/dist/client/router").Router;
            __N_SSG?: boolean;
            __N_SSP?: boolean;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<WithApplicationInsightsProps & import("next/app").AppInitialProps & {
            Component: import("next").NextComponentType<import("next").NextPageContext, any, {}>;
            router: import("next/dist/client/router").Router;
            __N_SSG?: boolean;
            __N_SSP?: boolean;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<WithApplicationInsightsProps & import("next/app").AppInitialProps & {
            Component: import("next").NextComponentType<import("next").NextPageContext, any, {}>;
            router: import("next/dist/client/router").Router;
            __N_SSG?: boolean;
            __N_SSP?: boolean;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<WithApplicationInsightsProps & import("next/app").AppInitialProps & {
            Component: import("next").NextComponentType<import("next").NextPageContext, any, {}>;
            router: import("next/dist/client/router").Router;
            __N_SSG?: boolean;
            __N_SSP?: boolean;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    new (props: WithApplicationInsightsProps & import("next/app").AppInitialProps & {
        Component: import("next").NextComponentType<import("next").NextPageContext, any, {}>;
        router: import("next/dist/client/router").Router;
        __N_SSG?: boolean;
        __N_SSP?: boolean;
    }, context: any): {
        componentDidMount(): void;
        componentDidCatch(error: Error): void;
        initializeAppInsights(): void;
        trackPageView(): void;
        render(): React.DetailedReactHTMLElement<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<WithApplicationInsightsProps & import("next/app").AppInitialProps & {
            Component: import("next").NextComponentType<import("next").NextPageContext, any, {}>;
            router: import("next/dist/client/router").Router;
            __N_SSG?: boolean;
            __N_SSP?: boolean;
        }>) => {} | Pick<{}, K>) | Pick<{}, K>, callback?: () => void): void;
        forceUpdate(callback?: () => void): void;
        readonly props: Readonly<WithApplicationInsightsProps & import("next/app").AppInitialProps & {
            Component: import("next").NextComponentType<import("next").NextPageContext, any, {}>;
            router: import("next/dist/client/router").Router;
            __N_SSG?: boolean;
            __N_SSP?: boolean;
        }> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<WithApplicationInsightsProps & import("next/app").AppInitialProps & {
            Component: import("next").NextComponentType<import("next").NextPageContext, any, {}>;
            router: import("next/dist/client/router").Router;
            __N_SSG?: boolean;
            __N_SSP?: boolean;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<WithApplicationInsightsProps & import("next/app").AppInitialProps & {
            Component: import("next").NextComponentType<import("next").NextPageContext, any, {}>;
            router: import("next/dist/client/router").Router;
            __N_SSG?: boolean;
            __N_SSP?: boolean;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<WithApplicationInsightsProps & import("next/app").AppInitialProps & {
            Component: import("next").NextComponentType<import("next").NextPageContext, any, {}>;
            router: import("next/dist/client/router").Router;
            __N_SSG?: boolean;
            __N_SSP?: boolean;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<WithApplicationInsightsProps & import("next/app").AppInitialProps & {
            Component: import("next").NextComponentType<import("next").NextPageContext, any, {}>;
            router: import("next/dist/client/router").Router;
            __N_SSG?: boolean;
            __N_SSP?: boolean;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<WithApplicationInsightsProps & import("next/app").AppInitialProps & {
            Component: import("next").NextComponentType<import("next").NextPageContext, any, {}>;
            router: import("next/dist/client/router").Router;
            __N_SSG?: boolean;
            __N_SSP?: boolean;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<WithApplicationInsightsProps & import("next/app").AppInitialProps & {
            Component: import("next").NextComponentType<import("next").NextPageContext, any, {}>;
            router: import("next/dist/client/router").Router;
            __N_SSG?: boolean;
            __N_SSP?: boolean;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<WithApplicationInsightsProps & import("next/app").AppInitialProps & {
            Component: import("next").NextComponentType<import("next").NextPageContext, any, {}>;
            router: import("next/dist/client/router").Router;
            __N_SSG?: boolean;
            __N_SSP?: boolean;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    getInitialProps: (appCtx: AppContext) => Promise<{
        pageProps: {};
    }>;
    contextType?: React.Context<any>;
};
export {};
