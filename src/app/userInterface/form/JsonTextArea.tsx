import { Editor, Monaco } from "@monaco-editor/react";

type JsonTextAreaProps = {
  text: string;
  onTextChange?: (s: string) => void;
  readonly?: boolean;
};

export function JsonTextArea(props: JsonTextAreaProps) {
  const { text, onTextChange } = props;
  const configureMonaco = (monaco: Monaco) => {
    monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
      validate: false,
    });
  };

  return (
    <div className="p-1 border-white border-2 rounded-sm h-full w-full">
      <Editor
        language="json"
        defaultValue="// JSON goes here"
        className="w-full h-full"
        height="100%"
        value={text}
        onChange={(s) => {
          if (onTextChange) onTextChange(s!);
        }}
        beforeMount={(monaco) => configureMonaco(monaco)}
        theme="vs-dark"
        options={{
          readOnly: props.readonly,
          codeLens: false,
          bracketPairColorization: {
            enabled: true,
            independentColorPoolPerBracketType: true,
          },
          contextmenu: false,
          inlayHints: {
            enabled: "off",
          },
          suggest: {
            showClasses: false,
            showColors: false,
            showConstants: false,
            showConstructors: false,
            showDeprecated: false,
            showEnumMembers: false,
            showEnums: false,
            showEvents: false,
            showFields: false,
            showFiles: false,
            showFolders: false,
            showFunctions: false,
            showIcons: false,
            showInlineDetails: false,
            showInterfaces: false,
            showIssues: false,
            showKeywords: false,
            showMethods: false,
            showModules: false,
            showOperators: false,
            showProperties: false,
            showReferences: false,
            showSnippets: false,
            showStatusBar: false,
            showStructs: false,
            showTypeParameters: false,
            showUnits: false,
            showUsers: false,
            showValues: false,
            showVariables: false,
            showWords: false,
            shareSuggestSelections: false,
          },
          selectionHighlight: false,
          "semanticHighlighting.enabled": false,
          quickSuggestions: false,
          minimap: {
            enabled: false,
          },
        }}
      />
    </div>
  );
}
