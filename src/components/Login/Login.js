import React, { useState } from "react";
import { Row, Col, Card, CardBody, Alert } from "reactstrap";
import { useForm } from "react-hook-form";

const Login = () => {
  const [message, setMesage] = useState("Servidor 1: ");
  const [colorMessage, setColorMessage] = useState("primary");

  console.log(123, process.env.REACT_APP_SECRET_NAME);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    validate(data);
  };
  const servidor = "Servidor 1";

  const validate = (data) => {
    const username = data.username;
    const password = data.password;

    if (username === "test" && password === "12345") {
      setMesage(servidor + " Usuario valido");
      setColorMessage("success");
    } else if (username === "admin" && password === "admin") {
      setMesage(servidor + " Usuario Administrador  valido");
      setColorMessage("success");
    } else if (username === "super" && password === "sa") {
      setMesage(servidor + " Super Usuario valido");
      setColorMessage("success");
    } else {
      setMesage(servidor + " Usuario invalido. Intente nuevamente...");
      setColorMessage("danger");
    }
  };

  return (
    <div>
      {message && <Alert color={colorMessage}>{message}</Alert>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <CardBody>
            <Row>
              <Col md="1">
                <label className="control-label" htmlFor="username">
                  Usuario:
                </label>
              </Col>
              <Col md="3">
                <input {...register("username", { required: true })} />
                <Row>
                  <span className="text-danger">{errors.username && "Nombre del usuario es obligatorio"}</span>
                </Row>
              </Col>
            </Row>
          </CardBody>
          <CardBody>
            <Row>
              <Col md="1">
                <label className="control-label" htmlFor="username">
                  Contraseña:
                </label>
              </Col>
              <Col md="6">
                <input {...register("password", { required: true })} type="password" />
                <Row>
                  <span className="text-danger">{errors.password && "La contraseña es obligatoria"}</span>
                </Row>
              </Col>
            </Row>
          </CardBody>
          <br />
          <CardBody>
            <Row>
              <Col md="6">
                <input type="submit" />
              </Col>
            </Row>
          </CardBody>
        </Card>
      </form>
    </div>
  );
};

export default Login;
