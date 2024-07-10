import {
    useParams
} from 'react-router-dom'

const ProjectPage = () => {
    const { projectId } = useParams()

    return (
        <>
            Single project stub
            {projectId}
        </>
    )
}

export default ProjectPage