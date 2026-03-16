import { useEffect } from "react"

const ensureMeta = (selector, attr, value) => {
  let tag = document.head.querySelector(selector)
  if (!tag) {
    tag = document.createElement("meta")
    tag.setAttribute(attr, value)
    document.head.appendChild(tag)
  }
  return tag
}

const ensureLink = (selector, relValue) => {
  let tag = document.head.querySelector(selector)
  if (!tag) {
    tag = document.createElement("link")
    tag.setAttribute("rel", relValue)
    document.head.appendChild(tag)
  }
  return tag
}

const Seo = ({ title, description, canonical, image = "/logo-eden.png", jsonLd }) => {
  useEffect(() => {
    document.title = title

    const metaDescription = ensureMeta('meta[name="description"]', "name", "description")
    metaDescription.setAttribute("content", description)

    ensureMeta('meta[property="og:title"]', "property", "og:title").setAttribute("content", title)
    ensureMeta('meta[property="og:description"]', "property", "og:description").setAttribute("content", description)
    ensureMeta('meta[property="og:image"]', "property", "og:image").setAttribute("content", image)

    ensureMeta('meta[name="twitter:title"]', "name", "twitter:title").setAttribute("content", title)
    ensureMeta('meta[name="twitter:description"]', "name", "twitter:description").setAttribute("content", description)
    ensureMeta('meta[name="twitter:image"]', "name", "twitter:image").setAttribute("content", image)

    if (canonical) {
      ensureLink('link[rel="canonical"]', "canonical").setAttribute("href", canonical)
    }

    let scriptTag = document.getElementById("page-jsonld")
    if (scriptTag) scriptTag.remove()

    if (jsonLd) {
      scriptTag = document.createElement("script")
      scriptTag.type = "application/ld+json"
      scriptTag.id = "page-jsonld"
      scriptTag.text = JSON.stringify(jsonLd)
      document.head.appendChild(scriptTag)
    }

    return () => {
      const current = document.getElementById("page-jsonld")
      if (current) current.remove()
    }
  }, [title, description, canonical, image, jsonLd])

  return null
}

export default Seo