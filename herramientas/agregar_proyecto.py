import os

# Ruta al archivo HTML
ruta_archivo = "/home/makabrus/Workspace/Portfolio/index.html"

# Solicitar datos del nuevo proyecto
project_number = input("Número del proyecto (por ejemplo, 6): ")
project_title = input("Título del proyecto: ")
project_description = input("Descripción del proyecto: ")
project_image = f"project{project_number}.jpg"
project_link = input("Enlace del proyecto (por ejemplo, https://example.com): ")

# Plantilla del nuevo proyecto
nuevo_proyecto = f"""
          <div class="project-card">
            <img
              src="assets/images/projects/{project_image}"
              alt="Proyecto {project_number}"
              class="project-image"
            />
            <div class="overlay">
              <div class="project-content">
                <h3 class="project-title">{project_title}</h3>
                <p class="project-description">{project_description}</p>
                <a
                  href="{project_link}"
                  class="project-link"
                  target="_blank"
                  >Ver más</a>
              </div>
            </div>
          </div>
"""

try:
    # Leer contenido del archivo
    with open(ruta_archivo, "r", encoding="utf-8") as archivo:
        contenido = archivo.read()

    # Buscar el final del contenedor de proyectos
    marca = "</div>\n          </div>\n        </div>"
    if marca in contenido:
        contenido_actualizado = contenido.replace(
            marca, nuevo_proyecto + marca
        )

        # Escribir de nuevo el contenido actualizado
        with open(ruta_archivo, "w", encoding="utf-8") as archivo:
            archivo.write(contenido_actualizado)

        print(f"Proyecto {project_number} agregado exitosamente.")7
    else:
        print("No se encontró el contenedor de proyectos en el archivo.")
except Exception as e:
    print(f"Error al actualizar el archivo: {e}")
