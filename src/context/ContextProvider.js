import { MobileSidebarContextProvider } from './mobileSidebar/MobileSidebarContext'
import { ThemeContextProvider } from './theme/ThemeContext'
import { ContactFormContextProvider } from './contactForm/ContactFormContext'
const ContextProvider = ({ children }) => {
  return (
    // T H E M E
    <ThemeContextProvider>
      {/* S I D E B A R */}
      <MobileSidebarContextProvider>
        {/* C O N T A C T -  F O R M */}
        <ContactFormContextProvider>{children} </ContactFormContextProvider>
      </MobileSidebarContextProvider>
    </ThemeContextProvider>
  )
}

export default ContextProvider
