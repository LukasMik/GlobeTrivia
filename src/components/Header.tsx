interface Props {
    heading: string
    underHeading?: string
}

const Header = ({heading, underHeading}: Props) => {
    return (
        <div className="text-center my-12">
            <h2>{heading}</h2>
            <h3 className='mt-8 md:mt-0'>{underHeading}</h3>
        </div>
    );
}

export default Header;