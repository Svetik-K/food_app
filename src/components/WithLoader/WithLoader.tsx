import {Loader, LoaderSize} from '../Loader/Loader'
import './WithLoader.scss'

export type WithLoaderProps = React.PropsWithChildren<{
    loading: boolean;
    children: React.ReactNode;
}>;

export const WithLoader: React.FC<WithLoaderProps> = ({loading, children}) => {
    return (
        <div>
            {loading && <Loader size={LoaderSize.s} />}
            {children}
        </div>
    )
};


