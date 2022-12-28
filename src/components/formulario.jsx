import { useForm } from "react-hook-form";
export default function Formulario() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form className="contacto-formulario" onSubmit={handleSubmit(onSubmit)}>
      <div className="line-top"></div>
      <div className="form-group">
      <input
        type="text"
        placeholder="Tu nombre"
        autoComplete="off"
        {...register("nombre", {
          required: {
            value: true,
            message: "Nombre es requerido",
          },
          autoComplete: "off",
        })}
      />
      {errors.nombre?.type === "required" && (
        <div className="error">{errors.nombre?.message}</div>
      )}
      </div>
      <div className="form-group">
        <input
          type="email"
          placeholder="Tu email"
          {...register("email", {
            required: {
              value: true,
              message: "Email es requerido",
            },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            },
          })}
        />
        {errors.email?.type === "pattern" && (
          <div className="error">Email no válido</div>
        )}
        {errors.email?.type === "required" && (
          <div className="error">{errors.email?.message}</div>
        )}
      </div>

      <div className="form-group">
      <textarea
        name="mensaje"
        rows="10"
        autoComplete="off"
        placeholder="Tu mensaje"></textarea>
      </div>
      <button type="submit" className="btn btn-enviar">
        Enviar
      </button>
    </form>
  );
}
