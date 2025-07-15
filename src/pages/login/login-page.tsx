import Button from '@/components/button';
import Input from '@/components/input';
import Tab from '@/components/layout/tab';

export default function LoginPage() {
  return (
    <div className="login-wrap">
      <div className="container">
        <main className="content">
          <Tab
            tabId={['tab-01', 'tab-02']}
            tabLabel={['SIGN IN', 'SIGN UP']}
            tabContent={[
              <form key="tab-01" className="mt44">
                <label className="input-label">
                  ID
                  <Input placeHolder="ID" id="user-id" />
                </label>
                <label className="input-label">
                  Password
                  <Input placeHolder="Password" type="password" id="user-pw" />
                </label>
                <Button className="pri" type="submit">
                  Sign in
                </Button>
              </form>,
              <form key="tab-02">
                <label className="input-label">
                  Username
                  <Input placeHolder="Username" id="user-name" />
                </label>
                <label className="input-label">
                  Email
                  <Input placeHolder="email" type="email" id="user-email" />
                </label>
                <label className="input-label">
                  Password
                  <Input
                    placeHolder="Password(8~20 characters)"
                    type="password"
                    id="user-pw"
                  />
                </label>
                <label className="input-label">
                  Confirm Password
                  <Input
                    placeHolder="Confirm password"
                    type="password"
                    id="check-pw"
                  />
                </label>
                <Button className="pri" type="submit">
                  Sign up
                </Button>
              </form>,
            ]}
          />
        </main>
      </div>
    </div>
  );
}
