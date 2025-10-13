import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Legal = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="container-custom py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-12">Privacy & Terms</h1>

            <div className="prose prose-lg max-w-none space-y-12">
              {/* Privacy Policy */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Privacy Policy</h2>
                <p className="text-muted-foreground mb-4">
                  This website is a personal portfolio showcasing my architecture work. I respect your privacy and am committed to protecting any personal information you share.
                </p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">Information Collection</h3>
                <p className="text-muted-foreground mb-4">
                  If you contact me via the contact form, I collect your name, email address, and message content solely for the purpose of responding to your enquiry.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3">Data Usage</h3>
                <p className="text-muted-foreground mb-4">
                  Your information is used only to respond to your message and is not shared with third parties. I do not use your data for marketing purposes.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3">Cookies</h3>
                <p className="text-muted-foreground mb-4">
                  This website does not use tracking cookies or analytics tools.
                </p>
              </div>

              {/* Terms of Use */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Terms of Use</h2>
                <p className="text-muted-foreground mb-4">
                  By accessing this website, you agree to these terms.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3">Intellectual Property</h3>
                <p className="text-muted-foreground mb-4">
                  All content, including text, images, and designs, is my intellectual property or used with permission. Please do not reproduce or distribute without prior written consent.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3">Disclaimer</h3>
                <p className="text-muted-foreground mb-4">
                  The information on this website is provided for general informational purposes only. While I strive for accuracy, I make no warranties about the completeness, reliability, or suitability of the information.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3">Contact</h3>
                <p className="text-muted-foreground">
                  If you have any questions about these terms or your privacy, please contact me at{' '}
                  <a href="mailto:daria@example.com" className="text-accent hover:underline">
                    daria@example.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Legal;
