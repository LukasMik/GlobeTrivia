interface Props {
    heading: string
    underHeading?: string
}

const Header = ({heading, underHeading}: Props) => {
    return (
        <div className="text-center mt-12">
            <h2>{heading}</h2>
            <h3>{underHeading}</h3>
        </div>
    );
}

export default Header;