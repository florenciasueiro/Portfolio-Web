import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CheckCircle2, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "../components/ui/Button";
import { Section } from "../layouts/Section";

const schema = z.object({ name: z.string().min(2, "Ingresá tu nombre"), email: z.email("Ingresá un email válido"), message: z.string().min(10, "Contame un poco más") });
type FormData = z.infer<typeof schema>;

export function Contact() {
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({ resolver: zodResolver(schema) });
  const submit = async (data: FormData) => { const message=encodeURIComponent(`Hola Flor, soy ${data.name}.\n\n${data.message}\n\nEmail: ${data.email}`); window.open(`https://wa.me/5491125918111?text=${message}`, "_blank", "noopener,noreferrer"); setSent(true); reset(); };
  return <Section id="contacto" eyebrow="06 / CONTACTO" title={<>Hagamos algo<br /><em>extraordinario.</em></>} className="contact-section"><div className="contact-grid"><div><p>Estoy buscando mi próxima oportunidad como desarrolladora. Si mi perfil encaja con tu equipo, me encantaría conversar.</p><div className="contact-links"><a href="https://wa.me/5491125918111" target="_blank" rel="noreferrer">WhatsApp Sodium</a><a href="https://sodium.ghisoni.com.ar/" target="_blank" rel="noreferrer">Web Sodium</a><a href="https://www.linkedin.com/in/florencia-sueiro-dev/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/florenciasueiro" target="_blank" rel="noreferrer">GitHub</a></div></div><form onSubmit={handleSubmit(submit)} noValidate>
    <label>Nombre<input {...register("name")} placeholder="Tu nombre" />{errors.name && <small>{errors.name.message}</small>}</label>
    <label>Email<input {...register("email")} type="email" placeholder="vos@empresa.com" />{errors.email && <small>{errors.email.message}</small>}</label>
    <label>Mensaje<textarea {...register("message")} rows={4} placeholder="Contame sobre la oportunidad..." />{errors.message && <small>{errors.message.message}</small>}</label>
    <Button type="submit" disabled={isSubmitting}>{sent ? <><CheckCircle2 size={17}/> Listo</> : <>Enviar por WhatsApp <Send size={17}/></>}</Button>
  </form></div></Section>;
}
