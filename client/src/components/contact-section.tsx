import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, Calendar, Check } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  businessName: z.string().min(2, "Business name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  serviceInterest: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      businessName: "",
      email: "",
      phone: "",
      serviceInterest: "",
      message: "",
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Success!",
        description: "Your consultation request has been submitted. We'll contact you within 24 hours.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to submit your request. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    submitMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-[var(--dark-bg)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Ready to Get Started?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's discuss how AI can transform your Caribbean business. Get a free consultation and custom proposal.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="bg-[var(--dark-card)] border-[var(--dark-border)]">
            <CardHeader>
              <CardTitle className="text-2xl text-[var(--neon-blue)]">
                Get Your Free Consultation
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-[var(--neon-green)] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-[var(--dark-bg)]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                  <p className="text-gray-300">
                    We've received your consultation request and will contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        {...form.register("firstName")}
                        className="bg-[var(--dark-bg)] border-[var(--dark-border)] focus:border-[var(--neon-blue)]"
                        placeholder="John"
                      />
                      {form.formState.errors.firstName && (
                        <p className="text-red-500 text-sm mt-1">
                          {form.formState.errors.firstName.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        {...form.register("lastName")}
                        className="bg-[var(--dark-bg)] border-[var(--dark-border)] focus:border-[var(--neon-blue)]"
                        placeholder="Smith"
                      />
                      {form.formState.errors.lastName && (
                        <p className="text-red-500 text-sm mt-1">
                          {form.formState.errors.lastName.message}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="businessName">Business Name</Label>
                    <Input
                      id="businessName"
                      {...form.register("businessName")}
                      className="bg-[var(--dark-bg)] border-[var(--dark-border)] focus:border-[var(--neon-blue)]"
                      placeholder="Your Business Name"
                    />
                    {form.formState.errors.businessName && (
                      <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.businessName.message}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      {...form.register("email")}
                      className="bg-[var(--dark-bg)] border-[var(--dark-border)] focus:border-[var(--neon-blue)]"
                      placeholder="john@business.com"
                    />
                    {form.formState.errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.email.message}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      {...form.register("phone")}
                      className="bg-[var(--dark-bg)] border-[var(--dark-border)] focus:border-[var(--neon-blue)]"
                      placeholder="+1 (123) 456-7890"
                    />
                    {form.formState.errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.phone.message}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="serviceInterest">Service Interest</Label>
                    <Select onValueChange={(value) => form.setValue("serviceInterest", value)}>
                      <SelectTrigger className="bg-[var(--dark-bg)] border-[var(--dark-border)] focus:border-[var(--neon-blue)]">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="website-booking">Website + Booking System</SelectItem>
                        <SelectItem value="ai-agent">AI Sales Agent + Support</SelectItem>
                        <SelectItem value="both">Both Services</SelectItem>
                        <SelectItem value="custom">Custom Solution</SelectItem>
                      </SelectContent>
                    </Select>
                    {form.formState.errors.serviceInterest && (
                      <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.serviceInterest.message}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Tell us about your business</Label>
                    <Textarea
                      id="message"
                      {...form.register("message")}
                      className="bg-[var(--dark-bg)] border-[var(--dark-border)] focus:border-[var(--neon-blue)]"
                      placeholder="Describe your business, challenges, and goals..."
                      rows={4}
                    />
                    {form.formState.errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.message.message}
                      </p>
                    )}
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-green)] text-[var(--dark-bg)] py-4 text-lg hover:shadow-lg transition-all"
                    disabled={submitMutation.isPending}
                  >
                    {submitMutation.isPending ? "Submitting..." : "Request Free Consultation"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="bg-[var(--dark-card)] border-[var(--dark-border)]">
              <CardHeader>
                <CardTitle className="text-2xl text-[var(--neon-green)]">
                  Quick Start Options
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-[var(--dark-bg)] rounded-lg">
                    <Phone className="text-[var(--neon-blue)] mr-4 w-6 h-6" />
                    <div>
                      <div className="font-semibold">Phone Consultation</div>
                      <div className="text-sm text-gray-400">+1 (246) 555-0123</div>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-[var(--dark-bg)] rounded-lg">
                    <Mail className="text-[var(--neon-green)] mr-4 w-6 h-6" />
                    <div>
                      <div className="font-semibold">Email Us</div>
                      <div className="text-sm text-gray-400">hello@caribai.com</div>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-[var(--dark-bg)] rounded-lg">
                    <Calendar className="text-[var(--coral)] mr-4 w-6 h-6" />
                    <div>
                      <div className="font-semibold">Schedule Meeting</div>
                      <div className="text-sm text-gray-400">Book a time that works for you</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[var(--neon-blue)]/20 to-[var(--neon-green)]/20 border-[var(--neon-blue)]/30">
              <CardHeader>
                <CardTitle className="text-2xl text-[var(--neon-blue)]">
                  Why Choose CaribAI?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center">
                    <Check className="text-[var(--neon-green)] mr-3 w-4 h-4" />
                    <span>Caribbean market expertise</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-[var(--neon-green)] mr-3 w-4 h-4" />
                    <span>Transparent, affordable pricing</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-[var(--neon-green)] mr-3 w-4 h-4" />
                    <span>24/7 technical support</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-[var(--neon-green)] mr-3 w-4 h-4" />
                    <span>Mobile-first approach</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-[var(--neon-green)] mr-3 w-4 h-4" />
                    <span>No long-term contracts</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
