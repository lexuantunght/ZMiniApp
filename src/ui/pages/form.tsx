import React from 'react';
import { Button, Input, Box, Page, useSnackbar } from 'zmp-ui';
import { useRecoilState } from 'recoil';
import { userInfo } from 'zmp-sdk';
import { userState } from 'ui/state/recoil';

type UserForm = Omit<userInfo, "id">

const FormPage: React.FunctionComponent = () => {
  const [user, setUser] = useRecoilState<userInfo>(userState)
  const [form, setForm] = React.useState<UserForm>({ name: user.name, avatar: user.avatar, birthday: user.birthday, gender: user.gender });
  const snackbar = useSnackbar()

  const handleChangeInput = (field, value) => {
    setForm({ ...form, [field]: value })
  }

  const handleSubmit = () => {
    snackbar.openSnackbar({duration: 3000, text: 'saved', type: 'success'});
    setUser((user) => ({ ...user, ...form }));
  }

  return (
    <Page className="page">
      <div className='section-container'>
        <Box >
          <Input
            id="name"
            label="Name"
            type="text"
            placeholder="Zalo"
            value={form?.name}
            onChange={(e) => handleChangeInput('name', e.target.value)}
          />
          <Input
            label="Avatar"
            type="text"
            placeholder="zalo@zalo.me"
            value={form?.avatar}
            onChange={(e) => handleChangeInput('avatar', e.target.value)}
          />
          <Box mt={4}>
            <Button fullWidth variant='primary' onClick={handleSubmit}>
              Submit
            </Button>
          </Box>
        </Box>
      </div>
    </Page>
  )
}

export default FormPage;