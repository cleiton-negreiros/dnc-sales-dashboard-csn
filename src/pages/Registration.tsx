import styled from "styled-components"

const RegistrationArea = styled.div`
    background: #666;
`

const RegistrationImage = styled.div`
    background-image: url(/login-image.png);
    background-size: cover;
    height: 100vh;
    width: 50vw;
`

function Registration() {
    return (
        <>
            <RegistrationArea>REGISTRATION</RegistrationArea>
            <RegistrationImage/>
        </>
    )
}

export default Registration