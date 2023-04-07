import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { $translate as t } from 'qwik-speak';
import Button, { ButtonTheme } from '../../button/button';
import { ContainerTheme } from '../../container/container';
import Section, { SectionHeader } from '../../section/section';
import styles from './contact.css?inline';

// TODO: Check why #EFEFFF is not in the color scheme
export default component$(() => {
  useStylesScoped$(styles);

  return (
    <Section id="contact" theme={ContainerTheme.OPAQUE}>
      <SectionHeader
        q:slot="header"
        title={t('contact.title@@Talk to our experts')}
      />
      <div class="flex flex-col lg:flex-row gap-10 ">
        <div class="flex flex-col items-center gap-4 flex-1 w-50">
          <form
            name="contact"
            method="post"
            data-netlify
            class="flex-1 w-50 bg-[#EFEFFF] w-full flex flex-col md:grid md:grid-cols-2 gap-4 p-6"
          >
            <div class="flex flex-col gap-1">
              <label class="text-blue-gray-500" for="companyEmail">
                {t('contact.form.company-email.label@@Company email')}
              </label>
              <input
                class="min-h-[44px] w-full border-blue-gray-500 px-4 py-1.5 pr-8 bg-white  focus:border-ui-blue"
                type="text"
                name="companyEmail"
                id="companyEmail"
              />
            </div>
            <div class="flex flex-col gap-1">
              <label class="text-blue-gray-500" for="companyEmail">
                {t('contact.form.name.label@@Your name')}
              </label>
              <input
                class="min-h-[44px] w-full border-blue-gray-500 px-4 py-1.5 pr-8 bg-white  focus:border-ui-blue"
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div class="flex flex-col gap-1">
              <label class="text-blue-gray-500" for="companySize">
                {t('contact.form.company-website.label@@Company size')}
              </label>
              <input
                class="min-h-[44px] w-full border-blue-gray-500 px-4 py-1.5 pr-8 bg-white  focus:border-ui-blue"
                type="text"
                name="companyWebsite"
                id="companyWebsite"
              />
            </div>
            <div class="flex flex-col gap-1 text-blue-gray-500">
              <label class="text-blue-gray-500" for="companySize">
                {t('contact.form.company-website.label@@Company website')}
              </label>
              <input
                class="min-h-[44px] w-full border-blue-gray-500 px-4 py-1.5 pr-8 bg-white  focus:border-ui-blue"
                type="text"
                name="companySize"
                id="companySize"
              />
            </div>
            <div class="flex flex-col gap-1 col-span-2">
              <label class="text-blue-gray-500" for="howCanWeHelp">
                {t(
                  'contact.form.how-can-we-help-you.label@@How can we help you?'
                )}
              </label>
              <textarea
                class="min-h-[44px] w-full border-blue-gray-500 px-4 py-1.5 pr-8 bg-white  focus:border-ui-blue"
                name="howCanWeHelp"
                id="howCanWeHelp"
                rows={4}
              ></textarea>
            </div>

            <div class="flex justify-end col-span-2">
              <Button
                class="w-full md:w-auto md:min-w-[200px]"
                theme={ButtonTheme.SOLID}
                type="submit"
                small
              >
                {t('contact.form.action@@Submit')}
              </Button>
            </div>
          </form>

          <form name="contact" method="POST" data-netlify="true">
            <p>
              <label>
                Your Name: <input type="text" name="name" />
              </label>
            </p>
            <p>
              <label>
                Your Email: <input type="email" name="email" />
              </label>
            </p>
            <p>
              <label>
                Your Role:{' '}
                <select name="role[]" multiple>
                  <option value="leader">Leader</option>
                  <option value="follower">Follower</option>
                </select>
              </label>
            </p>
            <p>
              <label>
                Message: <textarea name="message"></textarea>
              </label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>

          <div class="text-blue-gray-900 font-normal max-w-sm text-center text-lg">
            {t(
              'contact.disclaimer.text@@By submitting this form, I confirm that I have read and understood the'
            )}{' '}
            <a class="text-ui-blue" href="#">
              {t('contact.disclaimer.action@@Privacy & Policy')}
            </a>
            .
          </div>
        </div>
        <div class="flex flex-col gap-10 flex-1 w-50">
          <div class="text-blue-gray-900 text-3xl font-medium text-center md:text-left">
            {t(
              'contact.quote.text@@There are now 4000 companies using Module Federation in a detectable way. Likely many more who we cannot trace, but 4000 is still an impressive number of known entities.'
            )}
          </div>

          <div class="flex items-center justify-center md:justify-start gap-4">
            <img
              class="w-12 h-12"
              src="/photos/zack_jackson.png"
              alt={t('contact.quote.author.name@@Zack Jackson')}
            />
            <div>
              <div class="text-blue-gray-900 font-bold text-lg">
                {t('contact.quote.author.name@@Zack Jackson')}
              </div>
              <div class="text-blue-gray-900 font-normal text-lg">
                {t(
                  'contact.quote.author.title@@the сreator of Module Federation'
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
});
