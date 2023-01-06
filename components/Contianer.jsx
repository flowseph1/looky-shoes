import classNames from 'classnames';

function Container({ children, className }) {
    return <div className={classNames('max-w-[1200px] mx-auto', className)}>{children}</div>;
}

export default Container;
