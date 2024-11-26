import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className="footer footer-center bg-base-300 text-base-content p-4">
            <aside className="grid-flow-col items-center">
                <Image
                    src="/logo.png"
                    width={40}
                    height={40}
                    alt="Logo"
                />
                <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
            </aside>
        </footer>
    )
}

export default Footer