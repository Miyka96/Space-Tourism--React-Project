import './index.css'

const Section = ({children, sectionId}) => {
    return(
        <div className="animate__animated animate__fadeIn content__wrapper" id={sectionId}>
            {children}
        </div>
    )
}

export default Section;