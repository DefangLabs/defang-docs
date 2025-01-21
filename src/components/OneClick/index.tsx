import { Stack, TextField } from '@mui/material';
import { createContext, useContext, useState } from 'react';
import CodeBlock from '@theme/CodeBlock';



const URLContext = createContext({
  url: "",
  setUrl: (url: string) => { }
});

export function URLProvider({ children }: { children: React.ReactNode }) {
  const [url, setUrl] = useState("");
  return (
    <URLContext.Provider value={{ url, setUrl }}>
      {children}
    </URLContext.Provider>
  );
}



export function OriginalRepoUrl() {
  const { url, setUrl } = useContext(URLContext);
  return (
    <Stack spacing={2}>
      <TextField value={url} onChange={e => setUrl(e.target.value)} label="Your Repo URL" helperText="Like https://github.com/defanglabs/defang" />
    </Stack>
  );
}

function getTemplateUrl(url: string) {
  // extract github user and repo from url
  const regex = /https:\/\/github.com\/([^\/]+)\/([^\/]+)/;
  const match = url.match(regex);
  const user = match ? match[1] : "";
  const repo = match ? match[2] : "";

  // https://github.com/new?template_name=sample-django-template&template_owner=DefangSamples
  return `https://github.com/new?template_name=${repo}&template_owner=${user}&name=${repo}`;
}

export function TemplateUrl() {
  const { url } = useContext(URLContext);

  const templateUrl = getTemplateUrl(url);

  return (
    <Stack spacing={2}>
      <TextField value={templateUrl} label="Your Template URL" />
    </Stack>
  );
}

function getEncodedTemplateUrl(url: string) {
  const templateUrl = getTemplateUrl(url);
  return encodeURIComponent(templateUrl);
}


export function EncodedTemplateUrl() {
  const { url } = useContext(URLContext);
  const encodedTemplateUrl = getEncodedTemplateUrl(url);
  return (
    <Stack spacing={2}>
      <TextField value={encodedTemplateUrl} label="The Encoded Template URL" />
    </Stack>
  );
}

function getOneClickUrl(url: string) {
  const encodedTemplateUrl = getEncodedTemplateUrl(url);
  return `https://portal.defang.dev/redirect?url=${encodedTemplateUrl}`;
}


export function OneClickUrl() {
  const { url } = useContext(URLContext);
  const oneClickUrl = getOneClickUrl(url);
  return (
    <Stack spacing={2}>
      <TextField value={oneClickUrl} label="Your 1-Click URL" />
    </Stack>
  );
}

export function URLEncode() {
  const [val, setVal] = useState("");
  return (
    <Stack spacing={2}>
      <TextField value={val} placeholder='Paste a url here' onChange={e => setVal(e.target.value)} />
      <CodeBlock className="language-bash">
        {encodeURIComponent(val)}
      </CodeBlock>
    </Stack>
  )
}
