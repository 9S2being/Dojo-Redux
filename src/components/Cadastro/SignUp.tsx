import { useState, ChangeEvent, FormEvent } from 'react';
import { Typography, TextField, Button, Grid } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { signUp,  useAppDispatch } from '../../store';

export function SignUp() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [showAlertEmail, setShowAlertEmail] = useState(false);
  const [showAlertPassword, setShowAlertPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirm: ''
  });
   const checkEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]{3,}@(gmail|hotmail|outlook)\.(com|br)$/;
    return regex.test(email);
  };

  const checkPassword = (password: string) => {
    const regex = /^(?!.*?(012|123|234|345|456|567|678|789|890|987|876|765|654|543|432|321|210))[a-zA-Z0-9]{5,8}$/;
    return regex.test(password);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === 'email') {
      setShowAlertEmail(!checkEmail(value));
    }
    if (name === 'password') {
      setShowAlertPassword(!checkPassword(value));
    }

    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!showAlertEmail && !showAlertPassword) {
      if (formData.password === formData.confirm) {
        dispatch(signUp({ email: formData.email, password: formData.password }));
        navigate('/');
      } else {
        alert('Senhas não identicas');
      }
    }
  };

  return (
    <>
      <form  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '95vh'}} onSubmit={handleSubmit}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={6} md={4}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Typography variant="h5" align="center" style={{ fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: '30px' }}>
                  Sign Up
                </Typography>
              </Grid>
              <Grid item>
                <TextField
                  label="Email"
                  fullWidth
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  error={showAlertEmail}
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Senha"
                  type="password"
                  fullWidth
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  error={showAlertPassword}
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Confirmação de Senha"
                  type="password"
                  fullWidth
                  name="confirm"
                  value={formData.confirm}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
              <Grid item>
                <Button type="submit" variant="contained" fullWidth>
                  Cadastrar
                </Button>
              </Grid>

              <Grid item md={12} marginLeft={1}>
                <Typography variant="body1" align="center" style={{ fontSize: '12px' }}>
                  Já possui conta? vá para <Link to="/">Login</Link>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  );
}