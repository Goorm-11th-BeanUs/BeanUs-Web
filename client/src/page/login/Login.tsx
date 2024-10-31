import styled from '@emotion/styled'
import kakaoLoginButton from './kakaoLoginButton.png'

const LoginWraper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  & > div:first-of-type {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    hegiht: 100%;
    background-color: #e9feeb;
  }
  & > div:last-of-type {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    hegiht: 100%;
  }
`

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: white;
  flex-direction: column;
`

const LogoBox = styled.div`
  width: 50%;
  height: 150px;
  display: flex;
  justify-content: center;
`

const WelcomeText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > h2 {
    margin: 10px;
    color: black;
  }
`

const LoginButton = styled.button`
  background: none;
  border: none;
  padding: 0px;
  width: 300px;
  display: flex;
  align-items: center;
  & > img {
    width: 100%;
  }
  &:focus {
    outline: none;
  }
`

const Login = () => {
  return (
    <LoginWraper>
      <div>
        <img src="https://picsum.photos/200/300?random=1" />
      </div>
      <div>
        <LoginContainer>
          <LogoBox>
            <img src="logo.png" />
          </LogoBox>
          <WelcomeText>
            <h2>환영합니다</h2>
          </WelcomeText>
          <LoginButton>
            <img src={kakaoLoginButton} />
          </LoginButton>
        </LoginContainer>
      </div>
    </LoginWraper>
  )
}

export default Login
