import './index.css'

const Section = ({children, sectionId}) => {
    return(
        <div id={sectionId}>
            {children}
        </div>
    )
}

export default Section;