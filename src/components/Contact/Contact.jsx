import "./contact.scss"
import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"

const Contact = () => {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [modal, setModal] = useState(false)

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    setModal(true)
    setLoading(true)
    emailjs
      .sendForm(
        "service_68mrkoh",
        "template_71pcz92",
        form.current,
        "27GcS0sUms0v3I_fo"
      )
      .then((r) => {
        if (r.status === 200) {
          setLoading(false)
          setMessage("Mensaje enviado con éxito!")
        } else {
          throw new Error()
        }
        setTimeout(() => {
          setModal(false)
          window.location.reload(false)
        }, 2000)
      })
      .catch((error) => {
        console.log(error)

        setLoading(false)
        setMessage("Hubo un problema, por favor intente nuevamente")
        setTimeout(() => {
          setModal(false)
        }, 2000)
      })
  }

  return (
    <>
      <div className="contact-page">
        <h2>Contactame</h2>
        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>
            <ul>
              <li className="half">
                <input
                  type="text"
                  name="nombre"
                  id=""
                  placeholder="Nombre"
                  required
                />
              </li>
              <li className="half">
                <input
                  type="text"
                  name="asunto"
                  id=""
                  placeholder="Asunto"
                  required
                />
              </li>
              <li>
                <input
                  type="email"
                  name="email"
                  id=""
                  placeholder="Email"
                  required
                />
              </li>
              <li>
                <textarea
                  name="mensaje"
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Mensaje"
                  required
                ></textarea>
              </li>
              <li>
                <input type="submit" value="ENVIAR" className="flat-button" />
              </li>
            </ul>
          </form>
        </div>
      </div>
      <div id="modal" className={modal ? "modal" : "modal-hidden"}>
        <div className="modal-content">
          {loading ? <div className="loading"></div> : <p>{message}</p>}
        </div>
      </div>
    </>
  )
}

export default Contact
